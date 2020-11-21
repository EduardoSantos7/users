import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import errorMiddleware from './middleware/error.middleware';

class App {
	public app: express.Application;
	public port: number | string | undefined;

	constructor(controllers: any) {
		this.app = express();
		this.port = process.env.PORT || 5000;

		this.connectToTheDatabase();
		this.initializeMiddlewares();
		this.initializeControllers(controllers);
		this.initializeErrorHandling();
	}

	private initializeErrorHandling() {
		this.app.use(errorMiddleware);
	}

	private initializeMiddlewares() {
		this.app.use(bodyParser.json());

		// Config only for development
		if (process.env.NODE_ENV === 'development') {
			this.app.use(
				cors({
					origin: process.env.CLIENT_URL
				})
			);

			this.app.use(morgan('dev'));
		}
	}

	private initializeControllers(controllers: any) {
		controllers.forEach((controller: any) => {
			this.app.use('/', controller.router);
		});
	}

	public listen() {
		this.app.listen(this.port, () => {
			// tslint:disable-next-line: no-console
			console.log(`App listening on the port ${this.port}`);
		});
	}

	private connectToTheDatabase() {
		const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;
		mongoose
			.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`, {
				useNewUrlParser: true,
				useFindAndModify: false,
				useUnifiedTopology: true
			})
			// tslint:disable-next-line: no-console
			.then(() => console.log('Connected to DB'))
			// tslint:disable-next-line: no-console
			.catch((err) => console.log(err));
	}
}

export default App;

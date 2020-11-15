import bodyParser from 'body-parser';
import express from 'express';
import morgan from "morgan";
import cors from "cors";

class App {
	public app: express.Application;
	public port: number | string | undefined;

	constructor(controllers: any) {
		this.app = express();
		this.port = process.env.PORT || 5000;

		this.initializeMiddlewares();
		this.initializeControllers(controllers);
	}

	private initializeMiddlewares() {
		this.app.use(bodyParser.json());

		// Config only for development
		if (process.env.NODE_ENV === "development") {
			this.app.use(cors({
				origin: process.env.CLIENT_URL
			}))

			this.app.use(morgan('dev'))
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
}

export default App;

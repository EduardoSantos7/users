import dotenv from "dotenv";
import App from "./app";
import validateEnv from './utils/validateEnv';
import UsersController from "./controllers/usersController";
 
// config .env to ./config/config.env
dotenv.config({
    path: './config/.env',
})

validateEnv();

const app = new App(
    [
      new UsersController()
  ]
);

 
app.listen();
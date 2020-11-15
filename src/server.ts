import dotenv from "dotenv";
import App from "./app";
import UsersController from "./controllers/usersController/usersController";

// config .env to ./config/config.env
dotenv.config({
    path: './config/.env',
})

const app = new App(
    [
      new UsersController()
  ]
);

 
app.listen();
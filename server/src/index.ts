import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import key from "./config/keys";
import helmet from "helmet";
import cors from "cors";
import routes from "./routes";
import { Login } from "./entity/Login";

(async () => {
    try {
        const connection = await createConnection();
        const login = new Login();
        login.username = key.username as string;
        login.password = key.password as string;
        await connection.manager.save(login);
        const app = express();
        app.use(express.json());
        app.use(helmet());
        app.use(cors());
        app.use(routes);
        app.listen(key.port, () => console.log("Server is running..."));
    } catch (error) {
        console.log(error);
    }
})();

import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import key from "./config/keys";
import helmet from "helmet";
import cors from "cors";
import routes from "./routes";

(async () => {
    try {
        await createConnection();
        const app = express();
        app.use(express.json());
        app.use();
        app.use(helmet());
        app.use(cors());
        app.use(routes);
        app.listen(key.port, () => console.log("Server is running..."));
    } catch (error) {
        console.log(error);
    }
})();

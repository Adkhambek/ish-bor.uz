import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import key from "./config/keys";

(async () => {
    try {
        await createConnection();
        const app = express();
        app.listen(key.port, () => console.log("Server is running..."));
    } catch (error) {
        console.log(error);
    }
})();

// createConnection()
//     .then(async (connection) => {
//         const app = express();
//         app.listen(key.port);

// insert new users for test

//     console.log(
//         "Express server has started on port 3000. Open http://localhost:3000/users to see results"
//     );
// })
// .catch((error) => console.log(error));

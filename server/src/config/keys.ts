require("dotenv").config();

export default {
    port: process.env.PORT,
    db: {
        type: "postgres",
        url: process.env.DB_URL,
    },
};

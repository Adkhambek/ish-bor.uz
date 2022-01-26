require("dotenv").config();

export default {
    port: process.env.PORT,
    apiBaseUrl: process.env.API_BASE_URL,
    pgLimit: 1,
};

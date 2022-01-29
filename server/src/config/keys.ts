require("dotenv").config();

export default {
    port: process.env.PORT,
    apiBaseUrl: process.env.API_BASE_URL,
    pgLimit: 8,
    botToken: process.env.TOKEN,
    baseUrl: process.env.BASE_URL,
    telegramChannel: process.env.TELEGRAM_CHANNEL,
    chatId: process.env.CHAT_ID,
    username: process.env.LOGIN_USERNAME,
    password: process.env.LOGIN_PASSWORD,
    secretKey: process.env.SECRET_KEY,
    expiresIn: process.env.JWT_EXPIRE,
};

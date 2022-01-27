require("dotenv").config();

export default {
    port: process.env.PORT,
    apiBaseUrl: process.env.API_BASE_URL,
    pgLimit: 1,
    botToken: process.env.TOKEN,
    baseUrl: process.env.BASE_URL,
    telegramChannel: process.env.TELEGRAM_CHANNEL,
    chatId: process.env.CHAT_ID,
};

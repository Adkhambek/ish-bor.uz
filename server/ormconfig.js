require("dotenv").config();

module.exports = {
    type: "postgres",
    url: process.env.DB_URL,
    synchronize: true,
    logging: false,
    migrationsTableName: "custom_migration_table",
    entities: ["dist/entity/**/*.js"],
    migrations: ["dist/migration/**/*.js"],
    subscribers: ["dist/subscriber/**/*.js"],
    cli: {
        entitiesDir: "src/entity",
        migrationsDir: "src/migration",
        subscribersDir: "src/subscriber",
    },
};

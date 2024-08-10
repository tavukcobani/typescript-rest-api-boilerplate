import config from "../config";
import { DataSource } from "typeorm";
import  { ExampleEntity }  from '../api/src/entities/index';

export const dataSource = new DataSource({
    type: "postgres",
    host: config.database.serverFqdn,
    port: config.database.port || 5432,
    username: config.database.username,
    password: config.database.password,
    database: config.database.database,
    entities: [ExampleEntity],
    migrations: [],
    logging: true,
    synchronize: true, //should not be true in production
    ssl: true
});

export const initializeDatabase = () => {
    dataSource.initialize()
    .then(() => {
        console.log("Postgresql Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Postgresql Data Source initialization", err)
    })
};
import { Sequelize } from 'sequelize';
const config = {
    logging: false,
    // host: 'localhost',
    // // dialect: 'postgres',
    // port: 3000
};
const DB_NAME = 'palmbeachparents';
const URL = `postgres://localhost/${DB_NAME}`;

const db = new Sequelize(process.env.DATABASE_URL || URL, config);



export default db;

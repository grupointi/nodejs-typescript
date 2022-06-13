import { Sequelize } from 'sequelize';
import 'dotenv/config'

// sequelize usa localhost por defecto, pero para docker se necesita para consumir mysql local host.docker.internal
const db = new Sequelize('rest_server', 'admin', 'rockwell2021', {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
});

export default db;

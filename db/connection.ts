import { Sequelize } from 'sequelize';

const db = new Sequelize('rest_server', 'admin', 'rockwell2021', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default db;

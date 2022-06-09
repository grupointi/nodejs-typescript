import { Sequelize } from 'sequelize';
// sequelize usa localhost por defecto, pero para docker se necesita para consumir mysql local host.docker.internal
const db = new Sequelize('rest_server', 'admin', 'rockwell2021', {
    host: 'host.docker.internal',
    dialect: 'mysql',
    logging: false,
});

export default db;

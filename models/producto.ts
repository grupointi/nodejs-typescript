import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Producto = db.define('Producto', {
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    }
});

export default Producto;
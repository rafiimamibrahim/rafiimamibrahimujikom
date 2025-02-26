import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Buah = db.define(
    'Buah', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    deskripsi: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gambar: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        tableName: 'film'
    }
)



export default Buah
import {Sequelize} from "sequelize";

const db = new Sequelize('auth_db', 'root', 'test123', {
    host: "localhost",
    dialect: "mysql"
});

export default db;
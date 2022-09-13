import { Sequelize } from "sequelize";

const db = new Sequelize("ecomm", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;

import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const permission = db.define(
  "permission",
  {
    menu: {
      type: DataTypes.STRING,
    },
    URL: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default permission;

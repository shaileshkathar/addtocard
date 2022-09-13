import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const role = db.define(
  "selectroledata",
  {
    rolename: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default role;

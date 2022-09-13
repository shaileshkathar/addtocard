import { Sequelize } from "sequelize";
import db from "../config/db.js";
const { DataTypes } = Sequelize;

const user = db.define(
  "user",
  {
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    // Image: {
    //   type: DataTypes.STRING,
    // },
    roleId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

export default user;

import { Sequelize } from "sequelize";
import db from "../config/db.js";
const { DataTypes } = Sequelize;

const products = db.define(
  "products",
  {
    rname: {
      type: DataTypes.STRING,
    },
    imgdata: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    somedata: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    qnty: {
      type: DataTypes.INTEGER,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

export default products;

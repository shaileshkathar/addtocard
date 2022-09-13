import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const permissionMap = db.define(
  "permissionMap",
  {
    roleId: {
      type: DataTypes.INTEGER,
    },
    PermissionId: {
      type: DataTypes.INTEGER,
      //   unique: true,
      //   validate: {
      //     PermissionId: {
      //       msg: "Must be a single unique value",
      //     },
      //   },
    },
  },
  {
    freezeTableName: true,
  }
);

export default permissionMap;

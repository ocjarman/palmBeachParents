import db from "../db";
import { INTEGER } from "sequelize";

const UserFavorites = db.define("UserFavorites", {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

export default UserFavorites;

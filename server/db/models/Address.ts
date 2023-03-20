import db from "../db";

import {
    InferAttributes,
    InferCreationAttributes,
    Model,
    STRING, INTEGER
  } from "sequelize";
import { UserAttributes } from "./User";

export interface AddressAttributes
  extends Model<
    InferAttributes<AddressAttributes>,
    InferCreationAttributes<AddressAttributes>
  > {
  id?: number;
  address1: string | null;
  address2: string | null;
  city: string | null;
  state: string | null;
  zipcode: number | null;
  userId?: string | null;
  setUser(user: UserAttributes): unknown;
}

const Address = db.define<AddressAttributes>("address", {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    address1: {
      type: STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    address2: {
      type: STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    city: {
      type: STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    state: {
      type: STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    zipcode: {
      type: INTEGER,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
  });

  export default Address;
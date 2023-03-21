import db from "../db";

import {
    InferAttributes,
    InferCreationAttributes,
    Model,
    STRING, BOOLEAN, INTEGER, DATEONLY
  } from "sequelize";
import { AddressAttributes } from "./Address";

export interface EventAttributes
  extends Model<
    InferAttributes<EventAttributes>,
    InferCreationAttributes<EventAttributes>
  > {
  id?: number;
  name?: string | null;
  date: Date | null;
  time: string | null;
  description: string | null;
  webUrl: string | null;
  hostName: string | null;
  hostPhone: string | null;
  hostEmail: string | null;
  price: number | null;
  imageUrl: string | null;
  recurring: boolean | null;
  category: string | null;
  age: string | null;
  addressId?: number | null;
  setAddress(address: AddressAttributes): unknown;
}

const Event = db.define<EventAttributes>("event", {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    date: {
      type: DATEONLY,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    time: {
      type: STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: STRING,
      allowNull: true,
    },
    webUrl: {
      type: STRING,
      allowNull: true,
    },
    hostName: {
      type: STRING,
      allowNull: true,
    },
    hostPhone: {
      type: STRING,
      allowNull: true,
    },
    hostEmail: {
      type: STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    price: {
      type: INTEGER,
      allowNull: true,
    },
    imageUrl: {
      type: STRING,
      allowNull: true,
      defaultValue: "/static/palmBeach.png",
    },
    recurring: {
      type: BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    category: {
      type: STRING,
      allowNull: true,
    },
    age: {
      type: STRING,
      allowNull: true,
    },
  });

  export default Event;
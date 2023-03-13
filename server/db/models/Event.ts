import db from "../db";

import {
    InferAttributes,
    InferCreationAttributes,
    Model,
    STRING, UUID, UUIDV4, BOOLEAN, DATE, INTEGER
  } from "sequelize";
import { UserAttributes } from "./User";

export interface EventAttributes
  extends Model<
    InferAttributes<EventAttributes>,
    InferCreationAttributes<EventAttributes>
  > {
  id?: number;
  name: string | null;
  address: string | null;
  date: Date | null;
  time: string | null;
  description: string | null;
  url: string | null;
  hostName: string | null;
  hostPhone: string | null;
  hostEmail: string | null;
  price: number | null;
  imageUrl: string | null;
  recurring: boolean | null;
  category: string | null;
  age: string | null;
  users?: [] | null;
  addUser(user: UserAttributes): unknown;
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
    address: {
      type: STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    date: {
      type: DATE,
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
    url: {
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
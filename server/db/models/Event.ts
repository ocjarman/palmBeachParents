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
  id?: string;
  name: string;
  address: string;
  date: Date;
  time: string;
  description: string | null;
  url: string | null;
  hostName: string | null;
  hostNumber: string | null;
  hostEmail: string | null;
  cost: number | null;
  imageUrl: string | null;
  recurring: boolean | null;
  users?: [];
  addUser(user: UserAttributes): unknown;
}

const Event = db.define<EventAttributes>("event", {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    name: {
      type: STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    address: {
      type: STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    date: {
      type: DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    time: {
      type: STRING,
      allowNull: false,
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
    hostNumber: {
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
    cost: {
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
  });

  export default Event;
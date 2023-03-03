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
  eventName: string;
  eventAddress: string;
  eventDate: Date;
  eventTime: string;
  contactName: string | null;
  contactNumber: string | null;
  contactEmail: string | null;
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
    eventName: {
      type: STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    eventAddress: {
      type: STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    eventDate: {
      type: DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    eventTime: {
      type: STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    contactName: {
      type: STRING,
      allowNull: true,
    },
    contactNumber: {
      type: STRING,
      allowNull: true,
    },
    contactEmail: {
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
      defaultValue: "/public/logo.svg",
    },
    recurring: {
      type: BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  });

  export default Event;
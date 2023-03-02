import db from "../db";

import {
    CreationOptional,
    InferAttributes,
    InferCreationAttributes,
    Model,
    STRING, UUID, UUIDV4, BOOLEAN, DATE, INTEGER, AbstractDataType, VIRTUAL
  } from "sequelize";

interface ResponseError extends Error {
    status?: number;
  }

export interface EventModel
  extends Model<
    InferAttributes<EventModel>,
    InferCreationAttributes<EventModel>
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
}

const Event = db.define<EventModel>("event", {
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
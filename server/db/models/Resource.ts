import db from "../db";

import {
    InferAttributes,
    InferCreationAttributes,
    Model,
    STRING, UUID, UUIDV4, BOOLEAN, DATE, INTEGER
  } from "sequelize";

export interface ResourceAttributes
  extends Model<
    InferAttributes<ResourceAttributes>,
    InferCreationAttributes<ResourceAttributes>
  > {
  id?: string;
  link: string;
  description: string;
  organization: string;
}

const Resource = db.define<ResourceAttributes>("resource", {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    link: {
      type: STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    organization: {
      type: STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  export default Resource;
import db from "../db";
import { UserAttributes } from "./User";
import {
    InferAttributes,
    InferCreationAttributes,
    Model,
    STRING, UUID, UUIDV4
  } from "sequelize";

export interface OrganizationAttributes
  extends Model<
    InferAttributes<OrganizationAttributes>,
    InferCreationAttributes<OrganizationAttributes>
  > {
  id?: string;
  orgName: string;
  setMainContact(user: UserAttributes): unknown;
}

const Organization = db.define<OrganizationAttributes>("organization", {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    orgName: {
      type: STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  export default Organization;
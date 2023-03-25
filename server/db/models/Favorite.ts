import db from "../db";

import {
    InferAttributes,
    InferCreationAttributes,
    Model,
    STRING, BOOLEAN, INTEGER, AbstractDataType, VIRTUAL, DECIMAL
  } from "sequelize";
import { UserAttributes } from "./User";
import { AddressAttributes } from "./Address";

export interface FavoriteAttributes
  extends Model<
    InferAttributes<FavoriteAttributes>,
    InferCreationAttributes<FavoriteAttributes>
  > {
  id?: number;
  yelp_id: string;
  name?: string | null;
  imageUrl: string | null;
  yelp_review_count: number | null;
  yelp_rating: number | null;
  yelp_url: string | null;
  description: string | null;
  display_phone: string | null;
  distance: number | null;
  distanceInMiles: AbstractDataType | null;
  is_closed: boolean | null;
  addressId?: number | null;
  userId?: string | null;
  users?: UserAttributes[] | null;
  setAddress(address: AddressAttributes): unknown;
//   categories: string[] | null;
}

const Favorite = db.define<FavoriteAttributes>("favorite", {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    yelp_id: {
      type: STRING,
    },
    name: {
      type: STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    imageUrl: {
      type: STRING,
      allowNull: true,
      defaultValue: "/static/palmBeach.png",
    },
    yelp_url: {
        type: STRING,
        allowNull: true,
    },
    yelp_rating: {
        type: DECIMAL,
        allowNull: true,
        validate: {
          isDecimal: true
        }
    },
    yelp_review_count: {
        type: INTEGER,
        allowNull: true,
    },
    description: {
      type: STRING,
      allowNull: true,
    },
    is_closed: {
      type: BOOLEAN,
      allowNull: true,
    },
    distance: {
      type: INTEGER,
      allowNull: true,
      set(value: number) {
        this.setDataValue("distance", Math.floor(value));
      },
    },
    distanceInMiles: {
      type: INTEGER,
      allowNull: true,
    },
    display_phone: {
      type: STRING,
      allowNull: true,
    },
  });

  export default Favorite;
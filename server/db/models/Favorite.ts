import db from "../db";

import {
    InferAttributes,
    InferCreationAttributes,
    Model,
    STRING, BOOLEAN, INTEGER, DATEONLY, AbstractDataType, VIRTUAL
  } from "sequelize";
import { UserAttributes } from "./User";

export interface FavoriteAttributes
  extends Model<
    InferAttributes<FavoriteAttributes>,
    InferCreationAttributes<FavoriteAttributes>
  > {
  id?: number;
  name?: string | null;
  imageUrl: string | null;
  yelp_review_count: number | null;
  yelp_rating: number | null;
  yelp_url: string | null;
  description: string | null;
  display_phone: string | null;
  distance: string | null;
  distanceInMiles: AbstractDataType | null;
  is_closed: boolean | null;
  location: string | null;
  addressId?: number | null;
  users?: UserAttributes[] | null;
//   categories: string[] | null;
}

const Favorite = db.define<FavoriteAttributes>("favorite", {
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
        type: INTEGER,
        allowNull: true,
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
    location: {
      type: STRING,
      allowNull: true,
    },
    distance: {
      type: INTEGER,
      allowNull: true,
    },
    distanceInMiles: {
      type: VIRTUAL,
      allowNull: true,
    },
    display_phone: {
      type: VIRTUAL,
      allowNull: true,
    },
  });

  export default Favorite;
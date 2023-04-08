import db from "../db";

import {
    InferAttributes,
    InferCreationAttributes,
    Model,
    STRING, INTEGER
  } from "sequelize";
import { ReviewAttributes } from "./Review";


export interface TopicAttributes
  extends Model<
    InferAttributes<TopicAttributes>,
    InferCreationAttributes<TopicAttributes>
  > {
  id?: number;
  title?: string;
  subCategoryId?: number;
  reviews?: ReviewAttributes[] | null;
  addReview(review: ReviewAttributes): unknown;
}

const Topic = db.define<TopicAttributes>("Topic", {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: STRING,
      allowNull: false,
    }
  });

  export default Topic;
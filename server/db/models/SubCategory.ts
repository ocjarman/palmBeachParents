import db from "../db";

import {
    InferAttributes,
    InferCreationAttributes,
    Model,
    STRING, INTEGER
  } from "sequelize";
import { TopicAttributes } from "./Topic";


export interface SubCategoryAttributes
  extends Model<
    InferAttributes<SubCategoryAttributes>,
    InferCreationAttributes<SubCategoryAttributes>
  > {
  id?: number;
  name: string;
  image_url: string;
  recommendationCategoryId?: number | null;
  addTopic(topic: TopicAttributes) : unknown;
}

const SubCategory = db.define<SubCategoryAttributes>("subCategory", {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: STRING,
    },
    image_url: {
      type: STRING,
    }
  });

  export default SubCategory;
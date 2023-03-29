import db from "../db";

import {
    InferAttributes,
    InferCreationAttributes,
    Model,
    STRING, INTEGER
  } from "sequelize";


export interface RecCategoryAttributes
  extends Model<
    InferAttributes<RecCategoryAttributes>,
    InferCreationAttributes<RecCategoryAttributes>
  > {
  id?: number;
  name: string;
}

const RecommendationCategory = db.define<RecCategoryAttributes>("recommendationCategory", {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: STRING,
    }
  });

  export default RecommendationCategory;
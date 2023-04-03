import db from "../db";

import {
    InferAttributes,
    InferCreationAttributes,
    Model,
    STRING, INTEGER
  } from "sequelize";


export interface SubCategoryAttributes
  extends Model<
    InferAttributes<SubCategoryAttributes>,
    InferCreationAttributes<SubCategoryAttributes>
  > {
  id?: number;
  name: string;
  image_url: string;
  recommendationCategoryId?: number | null;
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
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
  image_url: string;
  
}

const SubCategory = db.define<RecCategoryAttributes>("subCategory", {
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
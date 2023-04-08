import db from "../db";
import {
  InferAttributes,
  InferCreationAttributes,
  TEXT,
  Model,
  STRING, INTEGER
} from "sequelize";

export interface ReviewAttributes
  extends Model<
    InferAttributes<ReviewAttributes>,
    InferCreationAttributes<ReviewAttributes>
  > {
  id?: number;
  title: string;
  body: string;
  topicId?: number;
}

const Review = db.define<ReviewAttributes>('Review', {
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: STRING,
    allowNull: false,
  },
  body: {
    type: TEXT,
    allowNull: false,
  },
});

export default Review;
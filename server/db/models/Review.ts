import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import db from "../db";

export interface ReviewAttributes
  extends Model<
    InferAttributes<ReviewAttributes>,
    InferCreationAttributes<ReviewAttributes>
  > {
  id?: number;
  title: string;
  body: string;
}

const Review = db.define<ReviewAttributes>('Review', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Review;
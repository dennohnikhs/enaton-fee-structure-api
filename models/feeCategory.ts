const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/config");

interface FeeCategoryAttributes {
  id?: number;
  name: string;
}

class FeeCategory
  extends Model<FeeCategoryAttributes>
  implements FeeCategoryAttributes
{
  public id!: number;
  public name!: string;
}

FeeCategory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "FeeCategory",
  }
);

export default FeeCategory;

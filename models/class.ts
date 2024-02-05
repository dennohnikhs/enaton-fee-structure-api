const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/config");

interface ClassAttributes {
  id?: number;
  name: string;
  curriculum: string;
}

class Class extends Model<ClassAttributes> implements ClassAttributes {
  public id!: number;
  public name!: string;
  public curriculum!: string;
}

Class.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    curriculum: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Class",
  }
);

export default Class;

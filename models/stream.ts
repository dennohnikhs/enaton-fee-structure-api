const { DataTypes, Model } = require("sequelize"); ;
const sequelize = require("../config/config");
const Class = require("./class");

interface StreamAttributes {
  id?: number;
  name: string;
  population: number;
  class_id: number;
}

class Stream extends Model<StreamAttributes> implements StreamAttributes {
  public id!: number;
  public name!: string;
  public population!: number;
  public class_id!: number;
}

Stream.init(
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
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Stream",
  }
);

Stream.belongsTo(Class, { foreignKey: "class_id" });

export default Stream;

const { DataTypes, Model } = require("sequelize"); ;
const sequelize = require("../config/config");
const Class = require("./class");
const FeeCategory = require("./feeCategory");

interface FeeStructureAttributes {
  id?: number;
  class_id: number;
  fee_category_id: number;
}

class FeeStructure
  extends Model<FeeStructureAttributes>
  implements FeeStructureAttributes
{
  public id!: number;
  public class_id!: number;
  public fee_category_id!: number;
}

FeeStructure.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fee_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "FeeStructure",
  }
);

FeeStructure.belongsTo(Class, { foreignKey: "class_id" });
FeeStructure.belongsTo(FeeCategory, { foreignKey: "fee_category_id" });

export default FeeStructure;

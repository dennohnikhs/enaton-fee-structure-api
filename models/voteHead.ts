const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/config");

interface VoteHeadAttributes {
  id?: number;
  name: string;
  priority: number;
  charge_type: string;
}

class VoteHead extends Model<VoteHeadAttributes> implements VoteHeadAttributes {
  public id!: number;
  public name!: string;
  public priority!: number;
  public charge_type!: string;
}

VoteHead.init(
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
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    charge_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "VoteHead",
  }
);

export default VoteHead;

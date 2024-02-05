const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/config");
const VoteHead = require("./voteHead");
const FeeCategory = require("./feeCategory");

interface FeeCategoryVoteheadAttributes {
  id?: number;
  votehead_id: number;
  fee_category_id: number;
}

class FeeCategoryVotehead
  extends Model<FeeCategoryVoteheadAttributes>
  implements FeeCategoryVoteheadAttributes
{
  public id!: number;
  public votehead_id!: number;
  public fee_category_id!: number;
}

FeeCategoryVotehead.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    votehead_id: {
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
    modelName: "FeeCategoryVotehead",
  }
);

FeeCategoryVotehead.belongsTo(VoteHead, { foreignKey: "votehead_id" });
FeeCategoryVotehead.belongsTo(FeeCategory, { foreignKey: "fee_category_id" });

export default FeeCategoryVotehead;

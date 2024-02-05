const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/config");
const FinancialYearTerm = require("./financialYearTerm");
const VoteHead = require("./voteHead");

interface VoteHeadTermAttributes {
  id?: number;
  financial_year_term_id: number;
  amount: number;
  votehead_id: number;
  class_id: number;
}

class VoteHeadTerm
  extends Model<VoteHeadTermAttributes>
  implements VoteHeadTermAttributes
{
  public id!: number;
  public financial_year_term_id!: number;
  public amount!: number;
  public votehead_id!: number;
  public class_id!: number;
}

VoteHeadTerm.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    financial_year_term_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    votehead_id: {
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
    modelName: "VoteHeadTerm",
  }
);

VoteHeadTerm.belongsTo(FinancialYearTerm, {
  foreignKey: "financial_year_term_id",
});
VoteHeadTerm.belongsTo(VoteHead, { foreignKey: "votehead_id" });

export default VoteHeadTerm;

const FinancialYear = require("./financialYear");
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/config");

interface FinancialYearTermAttributes {
  id?: number;
  term: number;
  start_date: Date;
  end_date: Date;
  financial_year_id: number;
}

class FinancialYearTerm
  extends Model<FinancialYearTermAttributes>
  implements FinancialYearTermAttributes
{
  public id!: number;
  public term!: number;
  public start_date!: Date;
  public end_date!: Date;
  public financial_year_id!: number;
}

FinancialYearTerm.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    term: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    financial_year_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "FinancialYearTerm",
  }
);

FinancialYearTerm.belongsTo(FinancialYear, { foreignKey: "financial_year_id" });

export default FinancialYearTerm;

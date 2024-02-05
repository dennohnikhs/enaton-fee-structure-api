const { DataTypes, Model } = require("sequelize"); ;
const sequelize = require("../config/config");
interface FinancialYearAttributes {
  id?: number;
  start_date: Date;
  end_date: Date;
}

class FinancialYear
  extends Model<FinancialYearAttributes>
  implements FinancialYearAttributes
{
  public id!: number;
  public start_date!: Date;
  public end_date!: Date;
}

FinancialYear.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "FinancialYear",
  }
);

export default FinancialYear;

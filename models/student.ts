const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/config");
const FeeCategory = require("./feeCategory");
const Stream = require("./stream");

interface StudentAttributes {
  id?: number;
  name: string;
  fee_category_id: number;
  stream_id: number;
}

class Student extends Model<StudentAttributes> implements StudentAttributes {
  public id!: number;
  public name!: string;
  public fee_category_id!: number;
  public stream_id!: number;
}

Student.init(
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
    fee_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stream_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Student",
  }
);

Student.belongsTo(FeeCategory, { foreignKey: "fee_category_id" });
Student.belongsTo(Stream, { foreignKey: "stream_id" });

export default Student;

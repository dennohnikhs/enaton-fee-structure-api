// controllers/financialYearController.ts
import { Request, Response } from "express";
const FinancialYear = require("../models/financialYear");

export const getAllFinancialYears = async (req: Request, res: Response) => {
  try {
    const financialYears = await FinancialYear.findAll();
    res.status(200).json(financialYears);
  } catch (error) {
    console.error("Error fetching financial years:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getFinancialYearById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const financialYear = await FinancialYear.findByPk(id);
    if (!financialYear) {
      res.status(404).send("Financial Year not found");
      return;
    }
    res.status(200).json(financialYear);
  } catch (error) {
    console.error("Error fetching financial year by ID:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const addFinancialYear = async (req: Request, res: Response) => {
  const { start_date, end_date } = req.body;

  try {
    const newFinancialYear = await FinancialYear.create({
      start_date,
      end_date,
    });

    res.status(201).json(newFinancialYear);
  } catch (error) {
    console.error("Error adding financial year:", error);
    res.status(500).send("Internal Server Error");
  }
};

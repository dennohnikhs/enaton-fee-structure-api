// controllers/financialYearTermController.ts
import { Request, Response } from "express";
const FinancialYearTerm = require("../models/financialYearTerm");

export const getAllFinancialYearTerms = async (req: Request, res: Response) => {
  try {
    const financialYearTerms = await FinancialYearTerm.findAll();
    res.status(200).json(financialYearTerms);
  } catch (error) {
    console.error("Error fetching financial year terms:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getFinancialYearTermById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const financialYearTerm = await FinancialYearTerm.findByPk(id);
    if (!financialYearTerm) {
      res.status(404).send("Financial Year Term not found");
      return;
    }
    res.status(200).json(financialYearTerm);
  } catch (error) {
    console.error("Error fetching financial year term by ID:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const addFinancialYearTerm = async (req: Request, res: Response) => {
  const { term, start_date, end_date, financial_year_id } = req.body;

  try {
    const newFinancialYearTerm = await FinancialYearTerm.create({
      term,
      start_date,
      end_date,
      financial_year_id,
    });

    res.status(201).json(newFinancialYearTerm);
  } catch (error) {
    console.error("Error adding financial year term:", error);
    res.status(500).send("Internal Server Error");
  }
};

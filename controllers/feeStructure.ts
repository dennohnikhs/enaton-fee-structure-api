import { Request, Response } from "express";
const FeeStructure = require("../models/feeStructure");

export const getAllFeeStructures = async (req: Request, res: Response) => {
  try {
    const feeStructures = await FeeStructure.findAll();
    res.status(200).json(feeStructures);
  } catch (error) {
    console.error("Error fetching fee structures:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getFeeStructureById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const feeStructure = await FeeStructure.findByPk(id);
    if (!feeStructure) {
      res.status(404).send("Fee Structure not found");
      return;
    }
    res.status(200).json(feeStructure);
  } catch (error) {
    console.error("Error fetching fee structure by ID:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const addFeeStructure = async (req: Request, res: Response) => {
  const { class_id, fee_category_id } = req.body;

  try {
    const newFeeStructure = await FeeStructure.create({
      class_id,
      fee_category_id,
    });

    res.status(201).json(newFeeStructure);
  } catch (error) {
    console.error("Error adding fee structure:", error);
    res.status(500).send("Internal Server Error");
  }
};

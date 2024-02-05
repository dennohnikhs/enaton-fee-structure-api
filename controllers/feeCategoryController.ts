import { Request, Response } from "express";
const FeeCategory = require("../models/feeCategory");

export const getAllFeeCategories = async (req: Request, res: Response) => {
  try {
    const feeCategories = await FeeCategory.findAll();
    res.status(200).json(feeCategories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getFeeCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const feeCategory = await FeeCategory.findByPk(id);

    if (!feeCategory) {
      return res.status(404).json({ message: "FeeCategory not found" });
    }

    res.status(200).json(feeCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createFeeCategory = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    const feeCategory = await FeeCategory.create({ name });

    res.status(201).json(feeCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateFeeCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const feeCategory = await FeeCategory.findByPk(id);

    if (!feeCategory) {
      return res.status(404).json({ message: "FeeCategory not found" });
    }

    await feeCategory.update({ name });

    res.status(200).json(feeCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteFeeCategory = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const feeCategory = await FeeCategory.findByPk(id);

    if (!feeCategory) {
      return res.status(404).json({ message: "FeeCategory not found" });
    }

    await feeCategory.destroy();

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

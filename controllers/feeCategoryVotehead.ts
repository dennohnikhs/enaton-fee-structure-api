import { Request, Response } from "express";
const FeeCategoryVotehead = require("../models/feeCategoryVoteHead");

export const getAllFeeCategoryVoteheads = async (
  req: Request,
  res: Response
) => {
  try {
    const feeCategoryVoteheads = await FeeCategoryVotehead.findAll();
    res.status(200).json(feeCategoryVoteheads);
  } catch (error) {
    console.error("Error fetching fee category voteheads:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getFeeCategoryVoteheadById = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  try {
    const feeCategoryVotehead = await FeeCategoryVotehead.findByPk(id);
    if (!feeCategoryVotehead) {
      res.status(404).send("Fee Category Votehead not found");
      return;
    }
    res.status(200).json(feeCategoryVotehead);
  } catch (error) {
    console.error("Error fetching fee category votehead by ID:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const addFeeCategoryVotehead = async (req: Request, res: Response) => {
  const { votehead_id, fee_category_id } = req.body;

  try {
    const newFeeCategoryVotehead = await FeeCategoryVotehead.create({
      votehead_id,
      fee_category_id,
    });

    res.status(201).json(newFeeCategoryVotehead);
  } catch (error) {
    console.error("Error adding fee category votehead:", error);
    res.status(500).send("Internal Server Error");
  }
};

import { Request, Response } from "express";
const VoteHeadTerm = require("../models/voteHeadTerm");

export const getAllVoteHeadTerms = async (req: Request, res: Response) => {
  try {
    const voteHeadTerms = await VoteHeadTerm.findAll();
    res.status(200).json(voteHeadTerms);
  } catch (error) {
    console.error("Error fetching vote head terms:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getVoteHeadTermById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const voteHeadTerm = await VoteHeadTerm.findByPk(id);
    if (!voteHeadTerm) {
      res.status(404).send("Vote Head Term not found");
      return;
    }
    res.status(200).json(voteHeadTerm);
  } catch (error) {
    console.error("Error fetching vote head term by ID:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const addVoteHeadTerm = async (req: Request, res: Response) => {
  const { financial_year_term_id, amount, votehead_id, class_id } = req.body;

  try {
    const newVoteHeadTerm = await VoteHeadTerm.create({
      financial_year_term_id,
      amount,
      votehead_id,
      class_id,
    });

    res.status(201).json(newVoteHeadTerm);
  } catch (error) {
    console.error("Error adding vote head term:", error);
    res.status(500).send("Internal Server Error");
  }
};

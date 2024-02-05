import { Request, Response } from "express";
const VoteHead = require("../models/voteHead");

export const getAllVoteHeads = async (req: Request, res: Response) => {
  try {
    const voteHeads = await VoteHead.findAll();
    res.status(200).json(voteHeads);
  } catch (error) {
    console.error("Error fetching vote heads:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getVoteHeadById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const voteHead = await VoteHead.findByPk(id);
    if (!voteHead) {
      res.status(404).send("Vote Head not found");
      return;
    }
    res.status(200).json(voteHead);
  } catch (error) {
    console.error("Error fetching vote head by ID:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const addVoteHead = async (req: Request, res: Response) => {
  const { name, priority, charge_type } = req.body;

  try {
    const newVoteHead = await VoteHead.create({
      name,
      priority,
      charge_type,
    });

    res.status(201).json(newVoteHead);
  } catch (error) {
    console.error("Error adding vote head:", error);
    res.status(500).send("Internal Server Error");
  }
};

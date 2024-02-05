import { Request, Response } from "express";
const Stream = require("../models/stream");

export const getAllStreams = async (req: Request, res: Response) => {
  try {
    const streams = await Stream.findAll();
    res.status(200).json(streams);
  } catch (error) {
    console.error("Error fetching streams:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getStreamById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const stream = await Stream.findByPk(id);
    if (!stream) {
      res.status(404).send("Stream not found");
      return;
    }
    res.status(200).json(stream);
  } catch (error) {
    console.error("Error fetching stream by ID:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const addStream = async (req: Request, res: Response) => {
  const { name, population, class_id } = req.body;

  try {
    const newStream = await Stream.create({
      name,
      population,
      class_id,
    });

    res.status(201).json(newStream);
  } catch (error) {
    console.error("Error adding stream:", error);
    res.status(500).send("Internal Server Error");
  }
};

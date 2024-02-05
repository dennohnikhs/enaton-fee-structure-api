import { Request, Response } from "express";
const Class = require("../models/class");

export const getAllClasses = async (req: Request, res: Response) => {
  try {
    const classes = await Class.findAll();
    res.status(200).json(classes);
  } catch (error) {
    console.error("Error fetching classes:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getClassById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const classObj = await Class.findByPk(id);
    if (!classObj) {
      res.status(404).send("Class not found");
      return;
    }
    res.status(200).json(classObj);
  } catch (error) {
    console.error("Error fetching class by ID:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const addClass = async (req: Request, res: Response) => {
  const { name, curriculum } = req.body;

  try {
    const newClass = await Class.create({
      name,
      curriculum,
    });

    res.status(201).json(newClass);
  } catch (error) {
    console.error("Error adding class:", error);
    res.status(500).send("Internal Server Error");
  }
};

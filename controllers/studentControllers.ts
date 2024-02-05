import { Request, Response } from "express";
const Student = require("../models/student");

export const addStudent = async (req: Request, res: Response) => {
  const { name, fee_category_id, stream_id } = req.body;

  try {
    const newStudent = await Student.create({
      name,
      fee_category_id,
      stream_id,
    });

    res.status(201).json(newStudent);
  } catch (error) {
    console.error("Error adding student:", error);
    res.status(500).send("Internal Server Error");
  }
};
export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await Student.findAll();
    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getStudentById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const student = await Student.findByPk(id);
    if (!student) {
      res.status(404).send("Student not found");
      return;
    }
    res.status(200).json(student);
  } catch (error) {
    console.error("Error fetching student by ID:", error);
    res.status(500).send("Internal Server Error");
  }
};

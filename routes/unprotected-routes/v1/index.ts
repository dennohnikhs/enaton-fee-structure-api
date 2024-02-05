import express from "express";
import {
  addStudent,
  getAllStudents,
  getStudentById,
} from "../../../controllers/studentControllers";
import {
  getAllStreams,
  getStreamById,
  addStream,
} from "../../../controllers/streamControllers";
import {
  getAllVoteHeads,
  getVoteHeadById,
  addVoteHead,
} from "../../../controllers/voteHeadController";
import {
  getAllVoteHeadTerms,
  getVoteHeadTermById,
  addVoteHeadTerm,
} from "../../../controllers/voteHeadTermController";
import {
  getAllFinancialYearTerms,
  getFinancialYearTermById,
  addFinancialYearTerm,
} from "../../../controllers/financialYearTerm";
import {
  getAllFinancialYears,
  getFinancialYearById,
  addFinancialYear,
} from "../../../controllers/financialYear";
import {
  addFeeStructure,
  getAllFeeStructures,
  getFeeStructureById,
} from "../../../controllers/feeStructure";
import {
  addFeeCategoryVotehead,
  getAllFeeCategoryVoteheads,
  getFeeCategoryVoteheadById,
} from "../../../controllers/feeCategoryVotehead";
import {
  createFeeCategory,
  deleteFeeCategory,
  getAllFeeCategories,
  getFeeCategoryById,
  updateFeeCategory,
} from "../../../controllers/feeCategoryController";

const router = express.Router();

//student controller routes
router.get("/students", getAllStudents);
router.get("/students/:id", getStudentById);
router.post("/students", addStudent);

//stream controller routes
router.get("/streams", getAllStreams);
router.get("/streams/:id", getStreamById);
router.post("/streams", addStream);

//voteheadController routes

router.get("/voteHeads", getAllVoteHeads);
router.get("/voteHeads/:id", getVoteHeadById);
router.post("/voteHeads", addVoteHead);

//voteheadTermController routes

router.get("/voteHeadTerms", getAllVoteHeadTerms);
router.get("/voteHeadTerms/:id", getVoteHeadTermById);
router.post("/voteHeadTerms", addVoteHeadTerm);

//financial year term controller routes

router.get("/financialYearTerms", getAllFinancialYearTerms);
router.get("/financialYearTerms/:id", getFinancialYearTermById);
router.post("/financialYearTerms", addFinancialYearTerm);

//financial year controller routes
router.get("/financialYears", getAllFinancialYears);
router.get("/financialYears/:id", getFinancialYearById);
router.post("/financialYears", addFinancialYear);

//fee structure controller routes

router.get("/feeStructures", getAllFeeStructures);
router.get("/feeStructures/:id", getFeeStructureById);
router.post("/feeStructures", addFeeStructure);

//fee category votehead controller routes
router.get("/feeCategoryVoteheads", getAllFeeCategoryVoteheads);
router.get("/feeCategoryVoteheads/:id", getFeeCategoryVoteheadById);
router.post("/feeCategoryVoteheads", addFeeCategoryVotehead);

//fee category controller routes

router.get("/feeCategories", getAllFeeCategories);

router.get("/feeCategories/:id", getFeeCategoryById);
router.post("/feeCategories", createFeeCategory);
router.put("/feeCategories/:id", updateFeeCategory);
router.delete("/feeCategories/:id", deleteFeeCategory);

export default router;

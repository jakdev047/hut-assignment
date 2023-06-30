import express from "express";
import {
  createCow,
  deleteCow,
  getAllCows,
  getSingleCow,
  updateCow,
} from "./cow.controller";

const router = express.Router();

router.post("/cows", createCow);
router.get("/cows", getAllCows);
router.get("/cows/:id", getSingleCow);
router.patch("/cows/:id", updateCow);
router.delete("/cows/:id", deleteCow);

export const CowRoutes = router;

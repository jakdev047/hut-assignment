import express from "express";
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "./user.controller";

const router = express.Router();

router.get("/users", getAllUser);
router.get("/users/:id", getSingleUser);
router.delete("/users/:id", deleteUser);
router.patch("/users/:id", updateUser);

export const UserRoutes = router;

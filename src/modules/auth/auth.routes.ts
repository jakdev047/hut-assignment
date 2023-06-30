import express from "express";
import { createUser } from "./auth.controller";

const router = express.Router();

router.post("/auth/signup", createUser);

export const authRoutes = router;

import express from "express";
import { createOrder, getAllOrders } from "./order.controller";

const router = express.Router();

router.post("/orders", createOrder);
router.get("/orders", getAllOrders);

export const orderRoutes = router;

import express, { Application, Request, Response } from "express";
import cors from "cors";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import { UserRoutes } from "./modules/user/user.routes";
import { CowRoutes } from "./modules/cow/cow.routes";
import { authRoutes } from "./modules/auth/auth.routes";
import { orderRoutes } from "./modules/order/order.routes";
const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", UserRoutes);
app.use("/api/v1", CowRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1", orderRoutes);

// error handler
app.use(globalErrorHandler);

export default app;

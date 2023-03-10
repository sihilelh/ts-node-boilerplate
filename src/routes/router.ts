import { Router } from "express";
import apiRouter from "./api.routes";
const indexRouter = Router();

indexRouter.use("/api", apiRouter);

export default indexRouter;

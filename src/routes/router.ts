import { Router } from "express";
import apiRouter from "./api.routes";
import webRouter from "./web.routes";
const indexRouter = Router();

indexRouter.use("/api", apiRouter);
indexRouter.use("/", webRouter);

export default indexRouter;

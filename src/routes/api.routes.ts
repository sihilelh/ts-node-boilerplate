import { Request, Response, Router } from "express";
const apiRouter = Router();

apiRouter.get("/status", (req: Request, res: Response) => {
  res.json({
    server_status: "running",
    ts: new Date().toISOString(),
  });
});

export default apiRouter;

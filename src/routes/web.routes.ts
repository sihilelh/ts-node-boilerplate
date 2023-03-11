import { Request, Response, Router } from "express";
const webRouter = Router();

webRouter.get("/", (req: Request, res: Response) => {
    res.render("welcome", { name: "Sihilel H", title: "Loremmmmmm" });
});

export default webRouter;

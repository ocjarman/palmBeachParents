import express, { Request, Response, NextFunction } from "express";
import { User } from "../db/index";
const router = express.Router();

// api/user
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const header = req.headers.authorization;
    const token = header && header.split(" ")[1];
    if (!token) return res.status(404).send("No Token Found");
    const user = await (User as any).findByToken(token);
    console.log(user)
    res.send(user);
  } catch (err) {
    res.sendStatus(404);
    next(err);
  }
});



export default router;

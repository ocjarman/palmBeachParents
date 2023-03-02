import express, { Request, Response, NextFunction } from "express";
import { User } from "db";
const router = express.Router();

// api/events
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const header = req.headers.authorization;
    const token = header && header.split(" ")[1];
    if (!token) return res.status(404).send("No Token Found");
    res.send('events page');
  } catch (err) {
    res.sendStatus(404);
    next(err);
  }
});



export default router;

import express, { Request, Response, NextFunction } from "express";
import { User, Event } from "../db/index";
const router = express.Router();

// api/events
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const header = req.headers.authorization;
    // const token = header && header.split(" ")[1];
    // if (!token) return res.status(404).send("No Token Found");
    let events = await Event.findAll()
    res.send(events);
  } catch (err) {
    res.sendStatus(404);
    next(err);
  }
});



export default router;

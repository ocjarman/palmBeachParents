import express, { Request, Response, NextFunction } from "express";
import { User, Event } from "../db/index";
const router = express.Router();

// api/events
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    let events = await Event.findAll()
    console.log(events)
    res.send(events);
  } catch (err) {
    res.sendStatus(404);
    next(err);
  }
});



export default router;

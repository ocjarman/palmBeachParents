import express, { Request, Response, NextFunction } from "express";
import { User, Event } from "../db/index";
const router = express.Router();
import { EventAttributes } from "db/models/Event";

// api/events
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    let events = await Event.findAll();
    res.send(events);
  } catch (err) {
    res.sendStatus(404);
    next(err);
  }
});
// api/events
router.post(
  "/addEvent",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        name,
        address,
        date,
        time,
        description,
        url,
        hostName,
        hostPhone,
        hostEmail,
        price,
        imageUrl,
        recurring,
        category,
        age,
      } = req.body;
      const newEvent: EventAttributes = await Event.create({
        name,
        address,
        date,
        time,
        description,
        url,
        hostName,
        hostPhone,
        hostEmail,
        price,
        imageUrl,
        recurring,
        category,
        age,
      });
      let events = await Event.findAll();
      res.send(events);
    } catch (err) {
      res.sendStatus(404);
      console.log(console.error())
      next(err);
    }
  }
);

// update event admin side
router.put("/", async (req, res, next) => {
  try {
    const { id, name, date, url, imageUrl, recurring, hostName, hostEmail, hostPhone, address, description, time, price, category, age } = req.body;
    console.log(req.body?.id)
      const event = await Event.findByPk(req.body.id)
       await event?.update({
        name: req.body.name,
        date: req.body.date,
        url: req.body.url,
        imageUrl: req.body.imageUrl, 
        recurring: req.body.recurring,
        hostName: req.body.hostName,
        hostEmail: req.body.hostEmail, 
        hostPhone: req.body.hostPhone,
        address: req.body.address,
        description: req.body.description,
        time: req.body.time,
        price: req.body.price,
        category: req.body.category,
        age : req.body.age,
      });
    

    const allEvents = await Event.findAll()
    res.status(200).send(allEvents);

  } catch (err) {
    next(err);
  }
});

export default router;

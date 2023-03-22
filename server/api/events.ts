import express, { Request, Response, NextFunction } from "express";
import { User, Event, Address } from "../db/index";
const router = express.Router();
import { EventAttributes } from "db/models/Event";


// api/events
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    let events = await Event.findAll({include: [{model: Address}]});
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
        webUrl,
        hostName,
        hostPhone,
        hostEmail,
        price,
        imageUrl,
        recurring,
        category,
        age,
      } = req.body;

      // const newAddress: AddressAttributes = await Address.create({ADDRESS INFO HERE})
      const newEvent: EventAttributes = await Event.create({
        name,
        date,
        time,
        description,
        webUrl,
        hostName,
        hostPhone,
        hostEmail,
        price,
        imageUrl,
        recurring,
        category,
        age,
      });

      // ASSOCIATE ADDRESS WITH NEW EVENT HERE

      let events = await Event.findAll();
      res.send(events);
    } catch (err) {
      res.sendStatus(404);
      next(err);
    }
  }
);

// update event admin side
router.put("/", async (req, res, next) => {
  try {
    const { id, name, date, webUrl, imageUrl, recurring, hostName, hostEmail, hostPhone, address, description, time, price, category, age } = req.body;
      const event = await Event.findByPk(req.body.id)
       await event?.update({
        name: req.body.name,
        date: req.body.date,
        webUrl: req.body.webUrl,
        imageUrl: req.body.imageUrl, 
        recurring: req.body.recurring,
        hostName: req.body.hostName,
        hostEmail: req.body.hostEmail, 
        hostPhone: req.body.hostPhone,
        // address: req.body.address,
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

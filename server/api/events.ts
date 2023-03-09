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
// router.put("/", async (req, res, next) => {
//   try {
//     const { id, name, hostName, hostEmail, hostPhone, location, description, time, price, category, age } = req.body;
//     const event = await Event.findByPk(id)
//     console.log(event)

//     // const updatedEvent = await event.update({
//     //   name: req.body.name,
//     //   hostName: req.body.hostName,
//     //   hostPhone: req.body.hostPhone,
//     //   birthday: req.body.birthday,
//     //   address: req.body.address,
//     //   avatarUrl: req.body.avatarUrl,
//     //   companyName: req.body.companyName,
//     // });
//     // res.status(200).send(updatedUser);
//   } catch (err) {
//     next(err);
//   }
// });

export default router;

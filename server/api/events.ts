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
// api/events
router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id, name, date, hostName, hostEmail, hostPhone, address, description, time, price, category, age } = req.body;
    await Event.create({id, name, date, hostName, hostEmail, hostPhone, address, description, time, price, category, age})
    let events = await Event.findAll()
    // console.log(events)
    res.send(events);
  } catch (err) {
    res.sendStatus(404);
    next(err);
  }
});

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

import express, { Request, Response, NextFunction } from "express";
// import { User, Event } from "../db/index";
const router = express.Router();
// import { EventAttributes } from "db/models/Event";
import axios from "axios";
const dotenv = require("dotenv");
const env = dotenv.config().parsed;

// api/recommendations
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
      },
      params: {
        term: "kids",
        location: "delray beach, FL",
        radius: 20000,
        sort_by: "rating",
        limit: 50,
        categories: ["kids", "playground", "daycare", "activities", "park"],
      },
    };
    let recommendations = await axios.get(
      `https://api.yelp.com/v3/businesses/search`,
      config
    );
    res.send(recommendations.data);
  } catch (err) {
    res.sendStatus(404);
    console.log(err);
    next(err);
  }
});

// api/recommendations
router.put(
  "/thingsToDo",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { term, location, radius, sort_by } = req.body;
      const config = {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
        params: {
          term: req.body.term,
          location: req.body.location,
          radius: req.body.radius,
          sort_by: req.body.sort_by,
          // limit: 50,
          // categories: ["kids", "playground", "daycare", "activities", "park"],
        },
      };
      let recommendations = await axios.get(
        `https://api.yelp.com/v3/businesses/search`,
        config
      );
      res.send(recommendations.data);
    } catch (err) {
      res.sendStatus(404);
      console.log(err);
      next(err);
    }
  }
);

export default router;

// router.post(
//   "/addEvent",
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const {
//         name,
//         address,
//         date,
//         time,
//         description,
//         url,
//         hostName,
//         hostPhone,
//         hostEmail,
//         price,
//         imageUrl,
//         recurring,
//         category,
//         age,
//       } = req.body;
//       const newEvent: EventAttributes = await Event.create({
//         name,
//         address,
//         date,
//         time,
//         description,
//         url,
//         hostName,
//         hostPhone,
//         hostEmail,
//         price,
//         imageUrl,
//         recurring,
//         category,
//         age,
//       });
//       let events = await Event.findAll();
//       res.send(events);
//     } catch (err) {
//       res.sendStatus(404);
//       console.log(console.error())
//       next(err);
//     }
//   }
// );

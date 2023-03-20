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
          term: req.body.term || null,
          location: req.body.location || null,
          radius: Number(req.body.radius) || null,
          sort_by: req.body.sort_by || null,
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
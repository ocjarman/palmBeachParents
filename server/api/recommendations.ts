import express, { Request, Response, NextFunction } from "express";
// import { User, Event } from "../db/index";
const router = express.Router();
// import { EventAttributes } from "db/models/Event";
import axios from 'axios'

// api/recommendations
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('hello')
    const config = {
        headers: {
          Authorization:
            `Bearer TpzKp9pHCavPR0bZidhR5CgRzM5iiu31yCWzJFTDRfyBBgZlHsdXtjt8Dw6U5TU48JPUfOv4YBk9c5n2HpKQnMxWSEOxEFmjimy5EH6iWZMvA54n9sbLgxveOscRZHYx`,
        },
        //     `Bearer ${process.env.YELP_API_KEY}`,
        params: {
          term: "kids",
          location: 'delray beach, FL',
          radius: 20000,
          sort_by: "rating",
          limit: 50,
          categories: ['kids', 'playground', 'daycare']
        },
      };
    let recommendations =  await axios.get(`https://api.yelp.com/v3/businesses/search`, config)
//     .then((data) => {
//     console.log(data)
// })
console.log(recommendations)
res.send(recommendations.data);
    // res.send(recommendations);
  } catch (err) {
    res.sendStatus(404);
    console.log(err)
    next(err);
  }
});

export default router;

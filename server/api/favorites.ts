import express, { Request, Response, NextFunction } from "express";

import {Address, Favorite} from "../db/index";
const router = express.Router();

// api/favorites
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    //get all favorites for user
    res.send("favorites page");
  } catch (err) {
    res.sendStatus(404);
    next(err);
  }
});

// api/favorites
// USE FIND OR CREATE!!!
router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {rec} = req.body;

    console.log(req.body)

    if (req.body) {
      const addressOfFavorite = await Address.create({address1: req.body.location.address1, address2: req.body.location.address2, city: req.body.location.city, state: req.body.location.state, zipcode: req.body.location.zip_code})
  
      const newOrFoundFavorite = await Favorite.findOrCreate({
        where: {name: req.body.name},
        defaults: {
          name: req.body.name,
          imageUrl: req.body.image_url,
          is_closed: req.body.is_closed,
          yelp_review_count: req.body.review_count,
          yelp_rating: req.body.rating,
          yelp_url: req.body.url,
          display_phone: req.body.display_phone,
          distance: req.body.distance,
          description: null,
        }
      });

      // await newOrFoundFavorite.setAddress(addressOfFavorite)
  
      console.log({newOrFoundFavorite})
    }

    // find user and associate with them
    // const user = User.findByPk(u)

    // await user.setFavorite(newFavorite)

    // const allFavoritesData = await Favorite.findAll({where: {userId: user.id}})

    // res.send(allFavoritesData);
    // collect data from req.body, will be yelp info
    // save it to our favorites table in db
    // associate with that user
    res.send("sending back all favorites");
  } catch (err) {
    res.sendStatus(404);
    next(err);
  }
});

router.put("/delete", async (req: Request, res: Response, next: NextFunction) => {
    try {
      //get all favorites for user
    
      res.send("favorites page");
    } catch (err) {
      res.sendStatus(404);
      next(err);
    }
  });

export default router;

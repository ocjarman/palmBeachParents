import express, { Request, Response, NextFunction } from "express";

import { Address, Favorite, User } from "../db/index";
import { authenticateUser } from "./helpers/authUserMiddleware";
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
router.post(
  "/",
  authenticateUser,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { rec } = req.body;
      const userId = req.body.user.id;
      const foundUser = await User.findByPk(userId);
      console.log(req.body)
      if (foundUser) {
        if (req.body) {
          const addressOfFavorite = await Address.create({
            address1: req.body.location.address1,
            address2: req.body.location.address2,
            city: req.body.location.city,
            state: req.body.location.state,
            zipcode: req.body.location.zip_code,
          });

          console.log(addressOfFavorite)
          const newFavorite = await Favorite.create({
              name: req.body.name,
              imageUrl: req.body.image_url,
              yelp_review_count: req.body.review_count,
              yelp_rating: req.body.rating,
              yelp_url: req.body.url,
              description: null,
              is_closed: req.body.is_closed,
              distance: req.body.distance,
              distanceInMiles: null,
              display_phone: req.body.display_phone,
          });
          if (newFavorite) {
            await newFavorite.setAddress(addressOfFavorite);
            await foundUser.addFavorite(newFavorite)
            await Favorite.findAll({where: {userId: foundUser.id}, include: [Address]})
            console.log("favorite made!");
          } else {
            console.log('no new fav')
          }
        } else {
          console.log('no req.body')
        }
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
      console.log(err)
      res.sendStatus(404);
      next(err);
    }
  }
);

router.put(
  "/delete",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      //get all favorites for user

      res.send("favorites page");
    } catch (err) {
      res.sendStatus(404);
      next(err);
    }
  }
);

export default router;

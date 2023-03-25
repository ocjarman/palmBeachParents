import express, { Request, Response, NextFunction } from "express";

import { Address, Favorite, User } from "../db/index";
import { authenticateUser } from "./helpers/authUserMiddleware";
const router = express.Router();

// api/favorites
router.get("/", authenticateUser, async (req: Request, res: Response, next: NextFunction) => {
  try {
    //get all favorites for user
    const userId = req.body.user.id;
    const foundUser = await User.findByPk(userId);
    if (foundUser) {
      const usersFavorites = await Favorite.findAll({where: {userId: foundUser.id}, include: [Address]})
      res.send(usersFavorites);
    } else {
      //redirect to login
      console.log('please login')
    }
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
      const { yelp_id,
        name,
        imageUrl,
        yelp_review_count,
        yelp_rating,
        yelp_url,
        description,
        is_closed,
        distance, 
        distanceInMiles, 
        display_phone, 
        location,
        categories} = req.body;
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
              yelp_id: req.body.yelp_id,
              name: req.body.name,
              imageUrl: req.body.image_url,
              yelp_review_count: req.body.yelp_review_count,
              yelp_rating: req.body.yelp_rating,
              yelp_url: req.body.yelp_url,
              description: null,
              is_closed: req.body.is_closed,
              distance: req.body.distance,
              distanceInMiles: req.body.distanceInMiles,
              display_phone: req.body.display_phone,
              //not fiddling with categories yet
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

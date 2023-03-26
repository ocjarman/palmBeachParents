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
      if (foundUser) {
        if (req.body) {
          const addressOfFavorite = await Address.create({
            address1: req.body.location.address1,
            address2: req.body.location.address2,
            city: req.body.location.city,
            state: req.body.location.state,
            zipcode: req.body.location.zip_code,
          });

          const newFavorite = await Favorite.create({
              yelp_id: req.body.yelp_id,
              name: req.body.name,
              imageUrl: req.body.imageUrl,
              yelp_review_count: req.body.yelp_review_count,
              yelp_rating: Number(req.body.yelp_rating),
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
          } else {
            console.log('no new fav')
          }
        } else {
          console.log('no req.body')
        }
      }
      res.sendStatus(200);
    } catch (err) {
      console.log(err)
      res.sendStatus(404);
      next(err);
    }
  }
);

router.put(
  "/delete", authenticateUser,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      //get all favorites for user
      const { rec } = req.body
      const favToDelete = await Favorite.findOne({where: {
        yelp_id: req.body.id,
        userId: req.body.user.id
      }})
      await favToDelete?.destroy()
      const usersFavorites = await Favorite.findAll({where: {userId: req.body.user.id}, include: [Address]})
      res.send(usersFavorites);
    } catch (err) {
      res.sendStatus(404);
      next(err);
    }
  }
);

export default router;

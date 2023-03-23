import express, { Request, Response, NextFunction } from "express";
import { User } from "db";
import Favorite, { FavoriteAttributes } from "db/models/Favorite";
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
// router.post("/", async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const {name, imageUrl, review_count, rating, url, display_phone, distance, is_closed, location} = req.body;

//     const newFavorite: FavoriteAttributes = await Favorite.create({
//       name: req.body.name,
//       imageUrl: req.body.image_url,
//       yelp_review_count: req.body.review_count,
//       yelp_rating: req.body.rating,
//       yelp_url: req.body.url,
//       description: null,
//       display_phone: req.body.display_phone,
//       distance: req.body.distance,
//       is_closed: req.body.is_closed,
//       location: req.body.location,
//     });

//     console.log({newFavorite})

//     // find user and associate with them
//     // const user = User.findByPk(u)

//     // await user.setFavorite(newFavorite)

//     // const allFavoritesData = await Favorite.findAll({where: {userId: user.id}})

//     // res.send(allFavoritesData);
//     // collect data from req.body, will be yelp info
//     // save it to our favorites table in db
//     // associate with that user
//     res.send("sending back all favorites");
//   } catch (err) {
//     res.sendStatus(404);
//     next(err);
//   }
// });

export default router;

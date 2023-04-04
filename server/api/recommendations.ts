import RecommendationCategory from "../db/models/RecommendationCategory";
import express, { Request, Response, NextFunction } from "express";
const router = express.Router();

// api/recommendations
router.get("/categories", async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.params)
    const recCategories = await RecommendationCategory.findAll()
    res.send(recCategories);
  } catch (err) {
    res.sendStatus(404);
    next(err);
  }
});



export default router;

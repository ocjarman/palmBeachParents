import RecommendationCategory from "../db/models/RecommendationCategory";
import express, { Request, Response, NextFunction } from "express";
import { SubCategory } from "../db/index";
const router = express.Router();

// api/recommendations
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const recCategories = await RecommendationCategory.findAll()
    res.send(recCategories);
  } catch (err) {
    res.sendStatus(404);
    next(err);
  }
});

// api/recommendations
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const recSubCategory = await RecommendationCategory.findAll({where: {id: req.params.id}, include: [SubCategory]})
    res.send(recSubCategory);
  } catch (err) {
    res.sendStatus(404);
    next(err);
  }
});



export default router;

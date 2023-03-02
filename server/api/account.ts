import express, { Request, Response, NextFunction } from "express";
const router = express.Router();

// api/account
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const header = req.headers.authorization;
    const token = header && header.split(" ")[1];
    if (!token) return res.status(404).send("No Token Found");
    res.send('accouns page');
  } catch (err) {
    res.sendStatus(404);
    next(err);
  }
});


export default router;

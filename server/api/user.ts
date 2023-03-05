import { UserAttributes } from "db/models/User";
import express, { Request, Response, NextFunction } from "express";
import { User } from "../db/index";
const router = express.Router();

// api/user
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const header = req.headers.authorization;
    const token = header && header.split(" ")[1];
    if (!token) return res.status(404).send("No Token Found");
    const user = await (User as any).findByToken(token);
    console.log(user)
    res.send(user);
  } catch (err) {
    res.sendStatus(404);
    next(err);
  }
});

//api/user/
router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
      const {
        username,
        password,
        firstName,
        lastName,
        email,
        phoneNum,
        birthday,
        address,
      } = req.body;
      const newUser: UserAttributes = await User.create({
        username,
        password,
        firstName,
        lastName,
        email,
        phoneNum,
        address,
        birthday,
      });
      res.send(newUser);
  } catch (err) {
    res.sendStatus(404);
    next(err);
  }
});

//api/user/usernameAuth
router.post("/usernameAuth", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const header = req.headers.authorization;
    const token = header && header.split(" ")[1];
    if (!token) return res.status(404).send("No Token Found");
    const user = await (User as any).findByToken(token);
    console.log(user)
    console.log(token)
    // res.send(user);
  } catch (err) {
    res.sendStatus(404);
    next(err);
  }
});



export default router;

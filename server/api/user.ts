import { UserAttributes } from "db/models/User";
import express, { Request, Response, NextFunction } from "express";
import { User } from "../db/index";
const router = express.Router();
import { authenticateUser } from "./helpers/authUserMiddleware";

// api/user
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const header = req.headers.authorization;
    const token = header && header.split(" ")[1];
    if (!token) return res.status(404).send("No Token Found");
    const user = await (User as any).findByToken(token);
    console.log(user);
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
router.post(
  "/usernameAuth",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { currentUsername } = req.body;
      if (currentUsername) {
        let user = await User.findAll({ where: { username: currentUsername } });
        if (user.length === 0) {
          console.log("user doesnt exist");
          res.sendStatus(200);
        } else {
          console.log("user exists already");
          res.sendStatus(400);
        }
      }
    } catch (err) {
      res.sendStatus(404);
      next(err);
    }
  }
);
//api/user/emailAuth
router.post(
  "/emailAuth",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { currentEmail } = req.body;
      if (currentEmail) {
        let user = await User.findAll({ where: { email: currentEmail } });
        if (user.length === 0) {
          console.log("user doesnt exist");
          res.sendStatus(200);
        } else {
          console.log("email already has account");
          res.sendStatus(400);
        }
      }
    } catch (err) {
      res.sendStatus(404);
      next(err);
    }
  }
);

// update record on admin side
router.put("/", async (req, res, next) => {
  console.log("hello");
  try {
    const header = req.headers.authorization;
    const token = header && header.split(" ")[1];
    const user = await (User as any).findByToken(token);
    const {
      firstName,
      lastName,
      phoneNum,
      birthday,
      address,
      avatarUrl,
      companyName,
    } = req.body;

    const updatedUser = await user.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNum: req.body.phoneNum,
      birthday: req.body.birthday,
      address: req.body.address,
      avatarUrl: req.body.avatarUrl,
      companyName: req.body.companyName,
    });
    res.status(200).send(updatedUser);
  } catch (err) {
    next(err);
  }
});

export default router;

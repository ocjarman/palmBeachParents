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
    const {
      currentUsername
    } = req.body;
    if (currentUsername) {
      console.log({currentUsername})
      let user = await User.findAll({where: {username: currentUsername}})
      console.log({user})
      if (user.length === 0) {
        console.log('user doesnt exist')
        res.sendStatus(200)
      } else {
        console.log('user exists already')
        res.sendStatus(400)
      }
    } 
  } catch (err) {
    res.sendStatus(404);
    next(err);
  }
});
//api/user/emailAuth
router.post("/emailAuth", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      currentEmail
    } = req.body;
    if (currentEmail) {
      console.log({currentEmail})
      let user = await User.findAll({where: {email: currentEmail}})
      console.log({user})
      if (user.length === 0) {
        console.log('user doesnt exist')
        res.sendStatus(200)
      } else {
        console.log('email already has account')
        res.sendStatus(400)
      }
    } 
  } catch (err) {
    res.sendStatus(404);
    next(err);
  }
});

// update record on admin side
router.put("/:id", async (req, res, next) => {
  try {
    const { id, username, firstName, lastName, phoneNum, email, birthday, address, avatarUrl, companyName  } = req.body;

    // const userToUpdate = await User.findByPk(id);
    // const updatedUser = await userToUpdate.update({
    //   artist,
    //   year,
    //   albumName,
    //   price,
    // });
    res.status(200).send(updatedRecord);
  } catch (err) {
    next(err);
  }
});



export default router;

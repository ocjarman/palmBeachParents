import { AddressAttributes } from "db/models/Address";
import { UserAttributes } from "db/models/User";
import express, { Request, Response, NextFunction } from "express";
import { Address, User } from "../db/index";
const router = express.Router();
import { authenticateUser } from "./helpers/authUserMiddleware";

// api/user
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const header = req.headers.authorization;
    const token = header && header.split(" ")[1];
    if (!token) return res.status(404).send("No Token Found");
    const user = await (User as any).findByToken(token, {include: [{model: Address}]});
    
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

    const newAddress : AddressAttributes = await Address.create({address1: req.body.address.address1, address2: req.body.address.address2, city: req.body.address.city, state: req.body.address.state, zipcode: req.body.address.zipcode})

    const newUser: UserAttributes = await User.create({
      username,
      password,
      firstName,
      lastName,
      email,
      phoneNum,
      birthday,
    });

    await newUser.setAddress(newAddress)

    const userData = await User.findOne({where: {id: newUser.id}, include: [{model: Address}]})

    res.send(userData);
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
      res.sendStatus(406);
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
      res.sendStatus(406);
      next(err);
    }
  }
);

// update user
router.put("/", async (req, res, next) => {
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
      imageUrl,
      companyName,
    } = req.body;

    const updatedUser = await user.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNum: req.body.phoneNum,
      birthday: req.body.birthday,
      // address: req.body.address,
      imageUrl: req.body.imageUrl,
      companyName: req.body.companyName,
    });
    res.status(200).send(updatedUser);
  } catch (err) {
    next(err);
  }
});

export default router;

import { User } from "../db/index";
import express, { NextFunction, Request, Response } from 'express';
const router = express.Router();

import {authenticateUser} from "./helpers/authUserMiddleware";

/* Get user based on token */
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const header = req.headers.authorization;
      const token = header && header.split(" ")[1];
  
      if (!token) return res.sendStatus(404);
  
      const foundUser = await User.prototype.findByToken(token);
        console.log({foundUser})
      res.status(200).send(foundUser);
    } catch (error) {
      res.status(404).send("Failed to Find User By Token");
    }
  });

/* Authenticate User */
router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send(await User.prototype.authenticate(req.body));
    } catch (error) {
      next(error);
    }
  });



// this route runs authenticateUser middleware before running rest of fxn
router.get(
    "/testAuth",
    authenticateUser,
    (req: Request, res: Response, next) => {
      if (req.body.user.isAdmin === false) return res.sendStatus(404);
      const userInfo = req.body.user;
      res.status(200).send(userInfo);
    }
  );

export default router;

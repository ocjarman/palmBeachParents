import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express';
import { User } from '../../db/index'
import { UserModel } from "../../db/models/User";

export interface authUserRequestInterface extends Request {
    headers: { authorization: string };
    user: UserModel;
  }
export interface authUserResponseInterface extends Response {
    headers: { authorization: string };
    user: UserModel;
  }

// custom middleware  attaches user to req object if authenticated
export const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers.authorization
    // grab token
    const token = header && header.split(' ')[1]
    // if no token, throw 404
    if (!token) res.sendStatus(404) 
    // verify token, send back the user
    jwt.verify(token!, process.env.JWT!, async (err, user) => {
        // if token invalid, 404
        if (err) return res.sendStatus(404)
         // Do stuff with our user
        
         if (typeof user === "object") {
        const userInfo = await User.findByPk(user.id);
        if (!userInfo) return res.sendStatus(404);
        req.body.user = userInfo;
        next();
      }
    })
}

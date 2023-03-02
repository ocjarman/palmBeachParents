import { User } from "../db/index";
import express, { NextFunction, Request, Response } from 'express';
const router = express.Router();

import {authenticateUser} from "./helpers/authUserMiddleware";

/* Get user based on token */
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send(await (User as any).findByToken(req.headers.authorization));
    }
    catch (error) {
        next(error);
        console.log('error on login')
    }
});

/* Authenticate User */
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        // user auth fxn in User.ts
        // give token back to user
        res.send(await (User as any).authenticate(req.body));
    }
    catch (error) {
        next(error);
    }
});



// this route runs authenticateUser middleware before running rest of fxn
router.get('/authTest', authenticateUser, (req: Request, res: Response, next: NextFunction) => {
    // might decide to use this for admin auth later
    // if (req.body.user.isAdmin === false) return res.sendStatus(404);
    const userInfo = req.body.user;
    res.status(200).send(userInfo);
})

export default router;

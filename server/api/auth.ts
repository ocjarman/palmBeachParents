import { Address, User } from "../db/index";
import express, { NextFunction, Request, Response } from 'express';
const router = express.Router();

import {authenticateUser} from "./helpers/authUserMiddleware";

/* Get user based on token */
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userbytoken = await (User as any).findByToken(req.headers.authorization)
        const userWithAdd = await User.findOne({where: {id: userbytoken.id}, include: [Address]})
        res.send(userWithAdd);
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

/* user admin check */
router.get('/adminTest', authenticateUser, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userInfo = req.body.user
        if (userInfo.isAdmin) {
            res.status(200).send(userInfo);
        } else {
            res.sendStatus(404)
        }
    }
    catch (error) {
        next(error);
        console.log('error on login')
    }
});
export default router;

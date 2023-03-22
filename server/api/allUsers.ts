import { Address, User } from "../db/index";
import express, { NextFunction, Request, Response } from 'express';
const router = express.Router();
import {authenticateUser} from "./helpers/authUserMiddleware";


// api/allUsers
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = req.body
        const foundUser = (await User.findByPk(req.body.userId))
        if (foundUser) {
            if (foundUser.isAdmin) {
                const allUsersData = await User.findAll({include: [Address]})
                res.status(200).send(allUsersData);
            } else {
                console.log('you dont have access to this!!')
            }
        } else {
            console.log('shouldnt ever hit this, user not found?')
        }
    }
    catch (error) {
        next(error);
        console.log('error on login')
    }
});

export default router;

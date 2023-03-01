import db from "../db";
import express, {NextFunction, Request, Response } from 'express';
const router = express.Router();
const User = db.User;
import jwt from 'jsonwebtoken'

/**
 * Get user based on token
 */
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send(await (User as any).findByToken(req.headers.authorization));
    }
    catch (error) {
        next(error);
        console.log('error on login')
    }
});

/**
 * Authenticate User
 */
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

router.get('/authTest', (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers.authorization
    const token = header && header.split(' ')[1]
    if (!token) res.sendStatus(404) //unauthorized, you shouldnt even know about this
    jwt.verify(token!, process.env.JWT!, (err, user) => {
        if (err) return res.sendStatus(404)
        res.send(user)
    })
})

export default router;

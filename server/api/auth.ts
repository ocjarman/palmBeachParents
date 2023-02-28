import db from "../db";
import express, {NextFunction, Request, Response } from 'express';
const router = express.Router();
const User = db.User;
/**
 * Get user based on token
 */
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send(await (User as any).findByToken(req.headers.authorization));
    }
    catch (error) {
        next(error);
    }
});

/**
 * Authenticate User
 */
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send(await (User as any).authenticate(req.body));
    }
    catch (error) {
        next(error);
    }
});

export default router;

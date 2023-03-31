import authRouter from "./auth";
import userRouter from './user'
import eventsRouter from './events'
import profileRouter from './profile'
import accountRouter from './account'
import resourcesRouter from './resources'
import allUsersRouter from './allUsers'
import thingsToDoRouter from './thingsToDo'
import favoritesRouter from './favorites'
import recommendationsRouter from './recommendations'
import express from "express";

const router = express.Router();


router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/events", eventsRouter);
router.use("/profile", profileRouter);
router.use("/account", accountRouter);
router.use("/resources", resourcesRouter);
router.use("/allUsers", allUsersRouter);
router.use("/thingsToDo", thingsToDoRouter);
router.use("/favorites", favoritesRouter);
router.use("/recommendations", recommendationsRouter);


export default router;
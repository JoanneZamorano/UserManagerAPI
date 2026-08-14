import { Router } from "express";
import {
    createUserController,
    deleteUserController,
    getUserById,
    listUsers,
    updateUserController
} from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export const userRouter = Router();

userRouter.use(authMiddleware);

userRouter.get("/", listUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/", createUserController);
userRouter.patch("/:id", updateUserController);
userRouter.delete("/:id", deleteUserController);
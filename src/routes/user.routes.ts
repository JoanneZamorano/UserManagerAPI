import { Router } from "express";
import {
    createUserController,
    deleteUserController,
    getCurrentUser,
    getUserById,
    listUsers,
    updateUserController
} from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

import { Role } from "../generated/prisma/client";
import {
    requireRole,
    requireSelfOrAdmin
} from "../middlewares/role.middleware";

export const userRouter = Router();

userRouter.use(authMiddleware);
userRouter.get("/me", getCurrentUser);
userRouter.get("/", requireRole(Role.ADMIN), listUsers);
userRouter.post("/", requireRole(Role.ADMIN), createUserController);
userRouter.get("/:id", requireSelfOrAdmin, getUserById);
userRouter.patch("/:id", requireSelfOrAdmin, updateUserController);
userRouter.delete("/:id", requireRole(Role.ADMIN), deleteUserController);
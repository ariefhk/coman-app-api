import express from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { UserController } from "../controller/user-controller";

export const privateRouter = express.Router();
privateRouter.use(authMiddleware);

// User APi
privateRouter.get("/api/users/current", UserController.get);
privateRouter.patch("/api/users/current", UserController.update);
privateRouter.delete("/api/users/current", UserController.logout);

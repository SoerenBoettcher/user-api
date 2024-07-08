import { Router } from "express";
import {
  createUser,
  getUser,
  updateUser,
} from "../controllers/userController.js";

export const UserRouter = Router();

UserRouter.post("/", createUser);
UserRouter.get("/:id", getUser);
UserRouter.put("/:id", updateUser);
UserRouter.patch("/:id", updateUser);

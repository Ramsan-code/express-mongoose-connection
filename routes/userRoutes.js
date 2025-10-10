import express from "express";
import {
  getUsers,
  getUsersID,
  createUser,
} from "../controllers/userControllers.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUsersID);
router.get("/", createUser);
export default router;

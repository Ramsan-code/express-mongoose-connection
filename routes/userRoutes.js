import express from "express";
import { getUsers, getUsersID } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUsersID);

export default router;

import express from "express";
import { addUser } from "../controllers/auth.controller.js";
import validate from "../middlewares/validate.middleware.js";
import { userAddValidator } from "../validators/auth.validator.js";

const router = express.Router();

router.post("/add", validate(userAddValidator), addUser);

export default router;

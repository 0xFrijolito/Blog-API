import {Router} from "express";
import * as authController from "../controllers/auth.controller.js";

const router = Router();

router.post("/login", authController.logIn);
router.post("/signin", authController.signIn);

export default router;

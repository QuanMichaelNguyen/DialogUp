import express, { Router } from "express"
import { getMe, login, logout, signup } from "../controllers/authControllers.js";
import protectedRoutes from "../middleware/protectedRoutes.js";

const router = express.Router();


router.get("/me", protectedRoutes ,getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router
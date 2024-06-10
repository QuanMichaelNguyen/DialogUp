import express from "express"
import protectedRoutes from "../middleware/protectedRoutes.js";
import { getMessages, getUsersForSideBar, sendMessages } from "../controllers/messagesControllers.js";

const router = express.Router();

router.get("/conversations", protectedRoutes, getUsersForSideBar);
router.get("/:id", protectedRoutes, getMessages);
router.post("/send/:id", protectedRoutes, sendMessages);



export default router;
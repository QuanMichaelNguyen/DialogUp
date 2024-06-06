import express from "express"

const router = express.Router();

router.post("/coversation", (req, res) => {
    res.send("Coversation route")
});

export default router;
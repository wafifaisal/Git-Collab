import express from "express";
import { searchEvents } from "../controllers/event.controller";

const router = express.Router();

router.get("/search", searchEvents);

export default router;

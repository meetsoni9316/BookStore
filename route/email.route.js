import express from "express";
import { email } from "../controller/email.controller.js";

const router = express.Router();
router.post("/emails", email);
export default router;

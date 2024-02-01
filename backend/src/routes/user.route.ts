import express from "express";
import { test } from "../controllers/user.controller.ts";

const router = express.Router();

router.get('/', test);

export default router;
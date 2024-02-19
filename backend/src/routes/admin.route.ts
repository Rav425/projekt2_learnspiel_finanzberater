import express from 'express';
import { createQuiz } from '../controllers/admin.controller.ts';

const router = express.Router();

router.post('/createQuiz', createQuiz)

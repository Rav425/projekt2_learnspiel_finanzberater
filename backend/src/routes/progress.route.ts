import express from 'express';
import { getUserProgress, updateUserProgress, saveUserProgress } from '../controllers/user-progress.controller.ts';

const router = express.Router();

router.get('/:userId', getUserProgress);
router.post('/update/:userId', updateUserProgress);
router.post('/save-progress/:userId', saveUserProgress);

export default router;
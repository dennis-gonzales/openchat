import { Router } from 'express';
import * as chatController from './controllers/chat-controller';

const router = Router();

// Define a POST endpoint for chat messages
router.post('/chat', chatController.sendMessage);

export default router;

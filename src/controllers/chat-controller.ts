import type { NextFunction, Request, Response } from 'express';

import { sendMessageToOpenAI } from '../services/openai-chat';

export async function sendMessage(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const userMessage = request.body.message;
    const result = await sendMessageToOpenAI(userMessage);
    response.json({ result });
  } catch (error) {
    console.error('Error handling chat message:', error);
    next(error); // Pass the error to the error handler
  }
}

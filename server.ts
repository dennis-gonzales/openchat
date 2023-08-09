import express, { json } from 'express';
import { sendMessageToOpenAI } from './src/openai-chat';

const app = express();
const port = 3000;

// Enable JSON parsing for incoming requests
app.use(json());

// Define a POST endpoint for chat messages
app.post('/chat', async (request, result) => {
  try {
    const userMessage = request.body.message;
    const response = await sendMessageToOpenAI(userMessage);
    result.json({ response });
  } catch (error) {
    console.error('Error handling chat message:', error);
    result
      .status(500)
      .json({ error: 'An error occurred while processing your request.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

import { config } from 'dotenv';
import { ChatGPTAPI } from 'chatgpt';

config();

export async function example() {
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY || 'ERR',
  });

  const response = await api.sendMessage(
    'create a sorting algorithm in python'
  );
  console.log(response.text);
}

await example();

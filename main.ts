import { config } from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import { createChat } from './src/chat-completion';

config();

async function main() {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  createChat(openai);
}

main();

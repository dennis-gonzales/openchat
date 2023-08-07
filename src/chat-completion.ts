import { OpenAIApi } from 'openai';

async function createChat(openai: OpenAIApi) {
  const chatCompletion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Hello world' }],
  });

  console.log(chatCompletion.data.choices[0].message);
}

export { createChat };

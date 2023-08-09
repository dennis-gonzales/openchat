import { OpenAIApi, Configuration, CreateChatCompletionRequest } from 'openai';
import { OPENAI_API_KEY } from '../configs/env';

// Initialize OpenAI client
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

/**
 * @example
 * const response = await sendMessageToOpenAI('Hello!');
 * console.log('OpenAI response:', response);
 */
export async function sendMessageToOpenAI(
  userMessage: string
): Promise<string | undefined> {
  // Create the chat request payload
  const requestPayload: CreateChatCompletionRequest = {
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: userMessage },
    ],
  };

  try {
    // Send the request to OpenAI
    const chatCompletion = await openai.createChatCompletion(requestPayload);
    return chatCompletion.data.choices[0].message?.content;
  } catch (error) {
    console.error('Error sending message to OpenAI:', error);
    throw error;
  }
}

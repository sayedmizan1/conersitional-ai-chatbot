const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: "anything",
  baseURL: "http://localhost:3040/v1",
});

async function main() {
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
    });
    console.log(chatCompletion); // Log the full response
  } catch (error) {
    console.error('Error creating chat completion:', error);
  }
}

main();

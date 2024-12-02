const OpenAI = require('openai');

// Initialize OpenAI with API key and base URL
const openai = new OpenAI({
  apiKey: "anything",
  baseURL: "http://localhost:3040/v1", // Ensure your server is running on this base URL
});

// Define an async function to use await
async function main() {
  try {
    // Create a chat completion request
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'what is docker' }],
      model: 'gpt-3.5-turbo', // Ensure the model name is correct
    });

    // Safely log the response
    if (chatCompletion.choices && chatCompletion.choices.length > 0) {
      console.log(chatCompletion.choices[0].message.content);
    } else {
      console.error('No choices returned in the response:', chatCompletion);
    }
  } catch (error) {
    // Handle errors gracefully
    console.error('Error creating chat completion:', error.message);
  }
}

// Call the async function
main();

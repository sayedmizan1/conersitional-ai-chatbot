import openai

# Set the API key and base URL
openai.api_key = 'anything'  # Replace with your actual API key
openai.api_base = "http://localhost:3040/v1/"  # Use `api_base` instead of `base_url`

# Make a request to the ChatCompletion endpoint
completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",  # Specify the model
    messages=[
        {"role": "user", "content": "How do I list all files in a directory using Python?"},
    ],
)

# Output the response
print(completion.choices[0].message["content"])

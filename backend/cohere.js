import { CohereClient } from 'cohere-ai';
import dotenv from 'dotenv';
dotenv.config();

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

export async function generateWeatherSummary({ name, city, temperature, condition, aqi }) {
  try {
    const prompt = `Generate a friendly weather report for ${name} in ${city}. The temperature is ${temperature}°C with ${condition} conditions and an AQI of ${aqi}.`;

    const response = await cohere.generate({
      model: 'command',
      prompt,
      maxTokens: 100,
      temperature: 0.7,
    });

    return response.generations[0].text.trim();
  } catch (error) {
    console.error('Cohere error:', error);
    return 'Sorry, unable to generate weather summary at the moment.';
  }
}

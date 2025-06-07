// backend/server.js (relevant part)
import express from 'express';
import cors from 'cors';
import { generateWeatherSummary } from './cohere.js'; // changed from gemini.js
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post('/summary', async (req, res) => {
  const { city, temperature, aqi } = req.body;
  const summary = await generateWeatherSummary(city, temperature, aqi);
  res.json({ summary });
});

app.listen(4000, () => console.log('Server running on port 4000'));

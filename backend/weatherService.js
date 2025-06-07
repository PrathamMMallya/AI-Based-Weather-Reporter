import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export async function getWeatherData(city) {
  const apiKey = process.env.WEATHER_API_KEY;
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  const response = await axios.get(url);
  const data = response.data;

  return {
    temperature: data.current.temp_c,
    condition: data.current.condition.text,
    aqi: data.current.air_quality?.pm2_5 || null,
  };
}

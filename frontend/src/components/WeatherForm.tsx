import React, { useState, useEffect } from "react";
import "../styles/index.css";

const weatherIcons: Record<string, string> = {
  sunny: "☀️",
  cloudy: "☁️",
  rainy: "🌧️",
  night: "🌙",
};

const WeatherForm = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<"sunny" | "cloudy" | "rainy" | "night">("sunny");
  const [success, setSuccess] = useState(false);

  // Set body class for background changes
  useEffect(() => {
    document.body.className = weather;
  }, [weather]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) return;

    // Just fake weather based on city length for demo
    if (city.length % 4 === 0) setWeather("sunny");
    else if (city.length % 4 === 1) setWeather("cloudy");
    else if (city.length % 4 === 2) setWeather("rainy");
    else setWeather("night");

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <>
      {/* Clouds */}
      <div className="cloud cloud-small"></div>
      <div className="cloud cloud-medium"></div>
      <div className="cloud cloud-large"></div>

      {/* Wind */}
      <div className="wind-line wind-line-small"></div>
      <div className="wind-line wind-line-large"></div>

      <div className="container" role="main" aria-label="Weather prediction form">
        <div className="weather-icon" aria-hidden="true">{weatherIcons[weather]}</div>
        <h1>AI Weather Prediction</h1>

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="city">Enter City</label>
          <input
            id="city"
            name="city"
            type="text"
            placeholder="e.g., New York"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            aria-required="true"
            autoComplete="off"
          />

          <button type="submit">Predict Weather</button>
        </form>

        {success && <p className="success-message">Weather updated successfully!</p>}
      </div>
    </>
  );
};

export default WeatherForm;

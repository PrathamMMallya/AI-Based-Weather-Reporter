import React, { useState, useEffect } from 'react';

const weatherThemes = [
  { name: 'sunny', icon: '☀️' },
  { name: 'cloudy', icon: '☁️' },
  { name: 'rainy', icon: '🌧️' },
  { name: 'night', icon: '🌙' },
];

function App() {
  const [themeIndex, setThemeIndex] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', city: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [summary, setSummary] = useState('');

  // Theme switcher every 10s
  useEffect(() => {
    document.body.className = weatherThemes[themeIndex].name;
    const interval = setInterval(() => {
      setThemeIndex((prev) => (prev + 1) % weatherThemes.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [themeIndex]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);
    setSummary('');

    try {
      const response = await fetch('http://localhost:4000/weather', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: formData.name,
          email: formData.email,
          city: formData.city,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setSummary(result.summary);
        setFormData({ name: '', email: '', city: '' });
      } else {
        alert(result.message || 'Something went wrong!');
      }
    } catch (error) {
      alert('Failed to connect to server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Animated clouds */}
      <div className="cloud cloud-small"></div>
      <div className="cloud cloud-medium"></div>
      <div className="cloud cloud-large"></div>

      {/* Animated wind lines */}
      <div className="wind-line wind-line1"></div>
      <div className="wind-line wind-line2"></div>
      <div className="wind-line wind-line3"></div>

      <div className="container" role="main" aria-label="Weather form">
        <div
          className="weather-icon"
          aria-live="polite"
          aria-atomic="true"
          aria-label={`Current weather icon: ${weatherThemes[themeIndex].name}`}
        >
          {weatherThemes[themeIndex].icon}
        </div>

        <h1>Enter Your Details</h1>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            name="city"
            placeholder="Your city"
            value={formData.city}
            onChange={handleChange}
            required
            autoComplete="address-level2"
          />

          <button type="submit" disabled={loading} aria-label="Submit form">
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>

        {submitted && (
          <div className="summary" role="alert" tabIndex={-1}>
            <h2 className="success-message">✅ Report Sent!</h2>
            <p className="ai-summary-title">AI Weather Summary:</p>
            <div className="ai-summary-box">{summary}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

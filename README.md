#  AI-Based Weather Reporter

An intelligent backend weather assistant that:
- Fetches real-time weather and AQI data using WeatherAPI
- Uses Cohere AI to generate friendly summaries
- Sends weather reports via email
- Stores submissions in Supabase

---

##  Features

-  Get real-time weather and air quality data
-  AI-generated weather summaries
-  Send personalized emails with weather info
-  Save submissions to a Supabase database

---

##  Tech Stack

- **Node.js** – backend logic
- **Express.js** – REST API framework
- **WeatherAPI** – fetch live weather and AQI
- **Cohere AI** – natural language summary generation
- **Supabase** – cloud PostgreSQL DB
- **Nodemailer** – email delivery
- **dotenv** – handle sensitive keys


---

##  Getting Started

### Step 1: Clone the Repository

```bash
git clone https://github.com/PrathamMMallya/AI-Based-Weather-Reporter.git
cd AI-Based-Weather-Reporter
```

### Step2: Install Dependencies
```bash
npm install
```
### Step 3: Create .env File
Create a file named .env in the root directory with the following content:

# Weather API
WEATHER_API_KEY=your_weatherapi_key

# Cohere AI
COHERE_API_KEY=your_cohere_api_key

# Supabase
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_service_key

# Email (SMTP config)
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=you@example.com
SMTP_PASS=your_email_password

### Step 4: Run the Server
```bash
node backend/server.js
```
Your API server will be running at:
 http://localhost:4000


### API Usage
POST /summary
Generates a summary using Cohere AI.

Endpoint: http://localhost:4000/summary

Sample Request
```bash
 {
  "name": "Alice",
  "city": "Bangalore",
  "temperature": 29,
  "condition": "Cloudy",
  "aqi": 45
}
```
### Sample Response
```bash
 {
  "summary": "Hey Alice! It’s 29°C with cloudy skies in Bangalore. The air quality is good with an AQI of 45."
}

```
By Pratham Mallya — combining weather data and AI for delightful reports 

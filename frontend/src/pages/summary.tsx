
export default function Summary() {
  const mockData = {
    full_name: "Pratham M",
    email: "lathaprathamnayak@gmail.com",
    city: "Bengaluru",
    temperature: 26,
    aqi: 42,
    summary:
      "Today's weather is simply splendid, with pleasantly undefined temperatures hovering around undefined degrees Celsius. The skies above are painting a beautiful picture, with undefined conditions creating a colorful palette. The air quality index reflects a score of undefined, adding a pleasant breath of fresh air to the mix. Go on, step out and enjoy this wonderful day!",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full space-y-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Weather Summary Report
        </h1>
        <div className="text-gray-700">
          <p><strong>Name:</strong> {mockData.full_name}</p>
          <p><strong>Email:</strong> {mockData.email}</p>
          <p><strong>City:</strong> {mockData.city}</p>
          <p><strong>Temperature:</strong> {mockData.temperature}°C</p>
          <p><strong>AQI:</strong> {mockData.aqi}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md border border-gray-200 mt-4">
          <p className="italic text-gray-600">{mockData.summary}</p>
        </div>
      </div>
    </div>
  );
}

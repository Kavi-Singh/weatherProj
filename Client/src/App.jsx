import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      const response = await axios.get(`http://localhost:3000/weather?city=${city}`);
      setWeather(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-500 flex flex-col items-center justify-start p-6">
      <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-md">🌦️ Weather Dashboard</h1>

      <SearchBar onSearch={fetchWeather} />

      {loading && <p className="text-white mt-4 animate-pulse">Loading...</p>}
      <WeatherCard weather={weather} error={error} />
    </div>
  );
}

export default App;

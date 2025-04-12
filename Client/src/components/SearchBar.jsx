import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 mb-6 flex-wrap justify-center">
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name"
        className="px-4 py-2 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
      />
      <button type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-shadow shadow-md">
        Search
      </button>
    </form>
  );
};

export default SearchBar;

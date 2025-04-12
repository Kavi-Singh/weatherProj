import React from 'react';

const WeatherCard = ({ weather, error }) => {
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!weather) {
    return null;
  }

  const { city,temperature,condition, icon, humidity,windSpeed,feels_like,temp_min,temp_max,sunrise,sunset,} = weather;

  const formatTime = (timestamp) =>
    new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

  return (
    <div className="bg-white p-6 rounded-xl hover:shadow-xl shadow-md w-full max-w-sm text-center space-y-3">
      <h2 className="text-2xl text-blue-700 font-bold">{city}</h2>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={condition} className="mx-auto"/>
      <p className="text-xl "> <span className='font-semibold'>Temperature:</span> {temperature}°C</p>
      <p> <span className="font-semibold">Feels Like:</span> {feels_like}°C</p>
      <div className='flex gap-4 justify-center items-center'>
        <p> <span className="font-semibold">Min: </span> {temp_min}°C</p>
        <p> <span className="font-semibold">Max: </span> {temp_max}°C</p>
      </div>
      <p> <span className="font-semibold"> Condition: </span>{condition}</p>
      <p> <span className="font-semibold"> Humidity: </span>{humidity}%</p>
      <p> <span className="font-semibold"> Wind Speed:</span> {windSpeed} m/s</p>
      <div className='flex gap-4 justify-center items-center'>
        <p className='text-grey-400'>Sunrise: <span className='text-yellow-400'>{formatTime(sunrise)}</span> </p>
        <span>|</span>
        <p className='text-grey-500'> Sunset: <span className='text-orange-400'>{formatTime(sunset)}</span></p>
      </div>
    </div>
  );
};

export default WeatherCard;

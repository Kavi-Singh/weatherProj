const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const city = req.query.city;
    // console.log(city);
    
  if (!city) {
    return res.status(400).json({ error: 'City is required' });
  }

  try {
    const apiKey = process.env.WEATHER_API_KEY;
    // console.log(apiKey);
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const resp = await axios.get(url);
    
    const data = {
      temperature: resp.data.main.temp,
      condition: resp.data.weather[0].main,
      icon: resp.data.weather[0].icon,
      humidity: resp.data.main.humidity,
      windSpeed: resp.data.wind.speed,
      city: resp.data.name,
      feels_like: resp.data.main.feels_like,
      temp_min: resp.data.main.temp_min,
      temp_max: resp.data.main.temp_max,
      sunrise: resp.data.sys.sunrise,
      sunset: resp.data.sys.sunset

    };
    // console.log('first', data)

    res.json(data);
  } catch (err) {
    if (err.resp && err.resp.status === 404) {
      res.status(404).json({ err: 'City Not Found!!!' });
    } else {
      res.status(500).json({ err: 'Server Error!!!' });
    }
  }
});

module.exports = router;
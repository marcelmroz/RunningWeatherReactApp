
import React, { useState } from 'react';

const WeatherForm = () => {
  const [cityName, setCityName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // API request logic here
  };

  return (
    <div>
      <h2>Running Weather App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default WeatherForm;

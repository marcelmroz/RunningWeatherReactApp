import React from 'react';
import { useParams } from 'react-router-dom';

const WeatherDisplay = () => {
  const { cityName } = useParams();

  return (
    <div>
      <h2>Weather for {cityName}</h2>
      {/* Display weather details and styling here */}
    </div>
  );
};

export default WeatherDisplay;

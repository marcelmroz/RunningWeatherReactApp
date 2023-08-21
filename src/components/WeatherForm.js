import React, { useState } from 'react';
import { useHistory} from 'react-router-dom';

const WeatherForm = () => {
  const [cityName] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the weather display page with the provided city name
    history.push(`/weather/${cityName}`);
  };

  return (
    <div>
      <h2>Running Weather App</h2>
      <form onSubmit={handleSubmit}>
        {/* ...input field and button */}
      </form>
    </div>
  );
};

export default WeatherForm;

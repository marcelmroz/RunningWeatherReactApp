import React from 'react';
import './App.css';
import WeatherForm from './components/WeatherForm'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherForm /> {/* Add WeatherForm component here */}

      </header>
    </div>
  );
}

export default App;

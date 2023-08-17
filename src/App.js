import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={WeatherForm} />
            <Route path="/weather/:cityName" component={WeatherDisplay} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import Header from './Header';
import WeatherContainer from './WeatherContainer';
import '../assets/css/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <WeatherContainer />
      </div>
    );
  }
}

export default App;

import React from 'react';
import config from '../config';

class WeatherData extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      weather: {},
    };
  }
  getWeather = async () => {
    this.setState({
      loading: true,
      weather: {},
    });
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${
        config.WEATHER_KEY
      }/${this.props.coords}?units=si`,
    );
    const data = await response.json();
    this.setState({
      weather: data,
      loading: false,
    });
  };
  render() {
    const buttonText = this.state.loading ? 'Loading...' : 'Get weather';
    return (
      <div className="data">
        {Object.keys(this.state.weather).length > 0 ? (
          <h4>
            {this.state.weather.hourly.summary} The temperature is currently{' '}
            {this.state.weather.currently.apparentTemperature}&deg;C outside.
          </h4>
        ) : (
          <p>
            Load weather for this location?{' '}
            <button disabled={this.state.loading} onClick={this.getWeather}>
              {buttonText}
            </button>
          </p>
        )}
      </div>
    );
  }
}

export default WeatherData;

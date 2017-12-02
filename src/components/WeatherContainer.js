import React from 'react';
import Map from './Map';
import WeatherData from './WeatherData';

class WeatherContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      location: '',
    };
  }
  getGeoLocation = () => {
    this.setState({
      loading: true,
    });
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        loading: false,
        location: `${position.coords.latitude},${position.coords.longitude}`,
      });
    });
  };
  render() {
    const buttonText = this.state.loading ? 'Finding...' : 'Find me';
    return (
      <section>
        {this.state.location.length > 0 ? (
          <div>
            <Map coords={this.state.location} />
            <WeatherData coords={this.state.location} />
          </div>
        ) : (
          <p>
            Let's get your location{' '}
            <button disabled={this.state.loading} onClick={this.getGeoLocation}>
              {buttonText}
            </button>
          </p>
        )}
      </section>
    );
  }
}

export default WeatherContainer;

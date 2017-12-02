import React from 'react';
import config from '../config';

class Map extends React.Component {
  render() {
    return (
      <div className="map">
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${
            this.props.coords
          }&zoom=14&size=400x150&maptype=roadmap&markers=color:red%7C${
            this.props.coords
          }&key=${config.MAP_KEY}`}
          alt="Your Location"
        />
      </div>
    );
  }
}

export default Map;

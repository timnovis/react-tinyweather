import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>
          TinyWeather <span className="emoji">🌦</span>
        </h1>
      </header>
    );
  }
}

export default Header;

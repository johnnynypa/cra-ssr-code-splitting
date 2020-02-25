import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        Home Page is working
        <Link to="/host" placeholder="">Anunciante</Link>
    </div>
    )
  }
}

export default HomePage;
import React, { Component } from 'react';

//components
import Header from './Components/header';
import What from './Components/what';
import Masters from './Components/masters';
import Help from './Components/help';
import Reviews from './Components/reviews';
import Footer from './Components/footer';

//styling
import './styling/index.scss';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header/>
        <div className="main-content">
          <What/>
          <Masters/>
          <Help/>
          <Reviews/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;

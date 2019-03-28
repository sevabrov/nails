import React, { Component } from 'react';


//animation
import "animate.css/animate.min.css";

//components
import Header from './Components/header';
import What from './Components/what';
import About from './Components/about';
import Help from './Components/help';
import Reviews from './Components/reviews';
import Footer from './Components/footer';
import PopUp from './Components/HOC/popUp';

//styling
import './styling/index.scss';

class App extends Component {

  state = {
    popUp: false        
}

  handlePopUp = () => {
    this.setState({
        popUp: true
    })
    setTimeout(()=> {
        this.setState({
            popUp: false
        })
    }, 3000)        
}

  render() {
    return (
      <div className="main">       
        <PopUp open={this.state.popUp}/>
        <Header handlePopUp = {this.handlePopUp}/>
        <div className="main-content">
          <About/>
          <What/>          
          <Help/>
          <Reviews/>
        </div>
        <Footer handlePopUp = {this.handlePopUp}/>
      </div>
    );
  }
}

export default App;

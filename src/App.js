import React, { Component } from 'react';
import axios from "axios";

import translateData from './Components/HOC/translate';


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
    popUp: false,
    lang: 'rus'        
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

componentDidMount() {
    axios.get('http://ip-api.com/json')
    .then(response => {
      if(response.data.countryCode === 'UA' || response.data.countryCode === 'RU') {
        this.setState({
          lang: 'rus'
        })
      }
    })
    .catch(error=> console.log(error))
}



  render() {    
    return (
      <div className="main">      
        <PopUp open={this.state.popUp} translateData={this.state.lang === 'eng' ? translateData.eng : translateData.rus}/>
        <Header handlePopUp = {this.handlePopUp} translateData={this.state.lang === 'eng' ? translateData.eng : translateData.rus}/>
        <div className="main-content">
          <About translateData={this.state.lang === 'eng' ? translateData.eng : translateData.rus}/>
          <What translateData={this.state.lang === 'eng' ? translateData.eng : translateData.rus}/>          
          <Help translateData={this.state.lang === 'eng' ? translateData.eng : translateData.rus}/>
          <Reviews translateData={this.state.lang === 'eng' ? translateData.eng : translateData.rus}/>
        </div>
        <Footer handlePopUp = {this.handlePopUp} translateData={this.state.lang === 'eng' ? translateData.eng : translateData.rus}/>
      </div>
    );
  }
}

export default App;

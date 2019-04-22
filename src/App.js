import React, { Component } from 'react';
import axios from "axios";
//for SEO
import {Helmet} from "react-helmet";

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
        <Helmet>
            <meta charSet="utf-8" />            
            <meta name="description" content={this.state.lang === 'eng' ? "Convenient service that combines manicure masters and customers." : "Удобный сервис который объединяет мастеров маникюра и клиентов."}/>
            <meta name="keywords" content={this.state.lang === 'eng'  ? "manicure, shilak, the best manicure masters, pedicure" : "маникюр, шилак, лучшие мастера маникюра, педикюр"}/>
            <link rel="canonical" href="http://lnb.life/index.html" />
            <title>{this.state.lang === 'eng' ? 'Life & Beauty - the best masters and clients with us': 'Life & Beauty - лучшие мастера и клиенты у нас'}</title>
        </Helmet>  
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

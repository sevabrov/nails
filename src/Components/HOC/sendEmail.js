import React, {Component} from 'react';
import axios from "axios";

import PopUp from './popUp';

class SendEmail extends Component {     

    state = {
        email: '',
        emailError: false,
        popUp: false        
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })        
    }

    handleError = (item) => {
        item === true 
            ? this.setState({
                email: 'Неверно указан email',
                emailError: item
            })
            : this.setState({
                email: '',
                emailError: item
            })  
              
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

    sendEmail = (e)=> {
        e.preventDefault();
        if(this.state.email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
            axios.get('http://ip-api.com/json')
            .then(
                response => {
                    this.handlePopUp();
                    console.log(this.state.email,response.data.query,response.data.city)
                }, 
                error => {
                    console.log(error)
                }
            )
        }else {
            this.handleError(true)
        }
        
    }

    render() {
        const {position, inputDesc, title, mobileView} = this.props;
        return(
            <form onSubmit={this.sendEmail}>                
                {this.state.popUp ? <PopUp/> : null}
                <h1 className={`${position}-title`}>{title}</h1>
                {mobileView ? <h1 className="header-title mob-view">Зарабатывай на клиентах вместе с L&B.</h1> : null}
                {/* <p className="input-text">Нам доверяют более 200 000 экспертов по всему миру</p> */}
                <div className={`input ${this.state.emailError ? 'error' : ''}`}>
                    <input type="text" value={this.state.email} onChange={this.handleEmail} placeholder="Оставьте ваш e-mail"/>
                    <button onBlur={()=>this.handleError(false)} className="start-btn">Начать Сейчас</button>
                </div>
                <p className="input-desc">{inputDesc}</p>
            </form>
        )
    }


}

export default SendEmail;
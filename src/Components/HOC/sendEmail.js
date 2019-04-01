import React, {Component} from 'react';
import axios from "axios";

const server = 'https://lookandbeauty.herokuapp.com/leanding/invite';

class SendEmail extends Component {     

    state = {
        email: '',
        emailError: false
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })        
    }

    handleError = (item) => {
        this.setState({
            emailError: item
        }) 
              
    }

    sendEmail = (e)=> {
        e.preventDefault();
        if(this.state.email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
            axios.get('http://ip-api.com/json')
            .then(
                response => {
                    const data = {
                        'email': this.state.email,
                        'ip': response.data.query,
                        'city': response.data.city
                    }
                    axios.post(server, data)
                    .then(
                        response => {
                            console.log('baki true',response.data)
                        },
                        error => {
                            console.error('baki false',error.config)
                        }
                    )
                    // this.props.handlePopUp();
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
                <h1 className={`${position}-title`}>{title}</h1>
                {mobileView ? <h1 className="header-title mob-view">Зарабатывай на клиентах вместе с L&B.</h1> : null}
                {/* <p className="input-text">Нам доверяют более 200 000 экспертов по всему миру</p> */}
                <div className={`input ${this.state.emailError ? 'error' : ''}`}>
                    <input type="text" value={this.state.email} onBlur={()=> this.state.emailError ? this.handleError(false) : null} onChange={this.handleEmail} placeholder="Оставьте ваш e-mail"/>
                    <button className="start-btn">Начать Сейчас</button>
                </div>
                <p className="input-desc">{inputDesc}</p>
            </form>
        )
    }


}

export default SendEmail;
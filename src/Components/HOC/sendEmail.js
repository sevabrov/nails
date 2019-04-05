import React, {Component} from 'react';
import axios from "axios";

const server = 'https://lookandbeauty.herokuapp.com/leanding/invite';

const errorMessage = (message)=> {
    return message === 'already used' 
        ? 'Почта уже есть в базе.'
        : 'Почта введена неверно'
}

class SendEmail extends Component {     

    state = {
        email: '',
        emailError: false,
        errorText: '',
        loader: false
        
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })        
    }

    handleLoader = (show) => {
        this.setState({
            loader: show
        })
    }

    handleError = (message) => {
        this.setState({
            emailError: true,
            errorText: message,
            loader: false
        });
        setTimeout(()=> {
            this.setState({
                emailError: false,
                errorText: ''
            })
        },2000)
    }

    sendEmail = (e)=> {
        e.preventDefault();

        this.handleLoader(true);

        setTimeout(()=> {
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
                                this.handleLoader(false);
                                this.props.handlePopUp();
                            },
                            error => {
                                console.log(error.response.data.errors[0].message)
                                this.handleError(errorMessage(error.response.data.errors[0].message))
                            }
                        )
                        console.log(this.state.email,response.data.query,response.data.city)
                    }, 
                    error => {
                        console.log('Bad request' ,error.response.data.errors[0].message)
                        this.handleError(errorMessage(error.response.data.errors[0].message))
                    }
                )
            }else {
                this.handleError(errorMessage())
            }
        },1000)
        
    }

    render() {
        const {position, inputDesc, title, mobileView} = this.props;
        return(
            <form onSubmit={this.sendEmail}>         
                <h1 className={`${position}-title`}>{title}</h1>
                {mobileView ? <h1 className="header-title mob-view">Зарабатывай на клиентах вместе с L&B.</h1> : null}
                {/* <p className="input-text">Нам доверяют более 200 000 экспертов по всему миру</p> */}
                <div className={`input ${this.state.emailError ? 'error' : ''}`}>
                    <div className="error-message">{this.state.errorText}</div>
                    <input type="text" value={this.state.email} onChange={this.handleEmail} placeholder="Оставьте ваш e-mail"/>
                    <button className={`start-btn ${this.state.loader ? 'loader' : ''}`}>Начать Сейчас</button>
                </div>
                <p className="input-desc">{inputDesc}</p>
            </form>
        )
    }


}

export default SendEmail;
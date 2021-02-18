import React from 'react';
import './login.css';
export default class Login extends React.Component {
  
    constructor(props){
    super(props) 
        let loggedIn=false
        this.state = {
           
            username:'',
            password:'',
            loggedIn

        }
        this.onChange = this.onChange.bind(this)
        this.submitForm=this.submitForm.bind(this)
    }
    onChange(e) {
        this.setState({
                [e.target.name]: e.target.value
        })
        }
    submitForm(e){
        e.preventDefault()
        const {username,password } = this.state
        if(username==="abc"&& password==="123")
        this.setState({
            loggedIn:true
        })
    }


      
        render() {
            if(this.state.loggedIn){
                return <admin/>
            }
            return (
                <div class="container">
                    <div className="Box">
                        <form onSubmit={this.submitForm}>
                            <div className="col-md-12">
                                <label for="username"><b>Username</b></label>
                                <input type="text" placeholder="Enter username" name="username" value={this.state.username} onChange={this.onChange} required />
                            </div>
                            <div className="col-md-12">
                                <label for="password"><b>Password</b></label>
                                <input type="password" placeholder="Enter password" name="password" value={this.state.password} onChange={this.onChange} required />
                            </div>
                            <div className="col-md-12">
                                <input type="submit"/>
                            </div>
                            <label>
                                <input type="checkbox" checked="checked" name="remember" /> Remember me
                            </label>
                        </form>
                    </div>
                </div>


            );
        }

    }



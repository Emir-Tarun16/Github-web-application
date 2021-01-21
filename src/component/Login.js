import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: ''

        }
    }
    login(){
        console.warn(this.state)
        
        fetch('http://localhost:3000/login?q='+this.state.name).then((data)=>{
            data.json().then((resp)=>{
                console.warn("resp",resp)
                    if(resp.length>0){
                        localStorage.setItem('login',JSON.stringify(resp))
                        console.warn(this.props.history.push('lists'))
                    }
                    else{
                        alert("Invalid Username and password !")
                    }

            })
        })
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Username" name="user" onChange={(event) => this.setState({ name: event.target.value })} />
                 <br /> <br />
                 <input type="password" placeholder="password" name="password" onChange={(event) => this.setState({ password: event.target.value })} />
                 <br /> <br /><button onClick={()=>{this.login()}}>Login</button>
            </div>
        );
    }
}

export default Login;
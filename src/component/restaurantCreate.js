import React, { Component } from 'react';

class RestaurantCreate extends Component {
    constructor(){
        super();
        this.state={
            id:null,
            name:null,
            address:null,
            rating:null,
        }
    }
    create(){
        fetch("http://localhost:3000/restaurant", {
            method:"post",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)}).then((result)=> {
                result.json().then((resp)=>{
                    alert("Restaurant have been added")
                })
            })
        }
    
    render() {
        return (
            <div>
                <h1>Restaurant Create</h1>
                <div>
                    <input onChange={(event) => {this.setState({id:event.target.value})}} 
                    placeholder="Restaurant Id" /> <br /> <br />
                    <input onChange={(event) => {this.setState({name:event.target.value})}} 
                    placeholder="Restaurant Name" /> <br /> <br />
                    <input onChange={(event) => {this.setState({address:event.target.value})}} 
                    placeholder="Restaurant Address" /> <br /> <br />
                    <input onChange={(event) => {this.setState({rating:event.target.value})}} 
                    placeholder="Restaurant Rating" /> <br /> <br />
                    <button onClick={()=>{this.create()}}>Add</button>
                </div>
            </div>
        );
    }
}

export default RestaurantCreate;
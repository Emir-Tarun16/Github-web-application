import React, { Component } from 'react';

class restaurantUpdate extends Component {
    constructor(){
        super();
        this.state={
            id:null,
            name:null,
            address:null,
            rating:null,
        }
    }
    componentDidMount() {
        fetch('http://localhost:3000/restaurant/' + this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({ 
                    id:result.id,
                    name:result.name,
                    address:result.address,
                    rating:result.rating
                    

                 })
            })
        })
    }
    update(){
        fetch("http://localhost:3000/restaurant/"+this.state.id, {
            method:"put",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)}).then((result)=> {
                result.json().then((resp)=>{
                    alert("Restaurant have been Updated ")
                })
            })
    }
    render() {
        console.warn(this.props.match.params.id)
        return (
            <div>
                <h1>Restaurant Update</h1>
                <div>
                    <input onChange={(event) => { this.setState({ id: event.target.value }) }}
                        placeholder="Restaurant Id" value={this.state.id} /> <br /> <br />
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder="Restaurant Name" value={this.state.name}/> <br /> <br />
                    <input onChange={(event) => { this.setState({ address: event.target.value }) }}
                        placeholder="Restaurant Address" value={this.state.address} /> <br /> <br />
                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }}
                        placeholder="Restaurant Rating" value={this.state.rating}/> <br /> <br />
                    <button onClick={() => { this.update() }}>Update</button>
                </div>
            </div>
        );
    }
}

export default restaurantUpdate;
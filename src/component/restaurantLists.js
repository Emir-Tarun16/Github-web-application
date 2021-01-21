import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit,faPen,faTrash } from '@fortawesome/free-solid-svg-icons'
class restaurantLists extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData(){
        fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({ lists: result })
            })
        })
    }
    delete(id){
        fetch("http://localhost:3000/restaurant/"+id,  {
            method:"DELETE",
            // headers:{
            //     'content-type': 'application/json'
            // },
            }).then((result)=> {
                result.json().then((resp)=>{
                    alert("Restaurant have been Deleted ")
                    this.getData()
                })
            })
    }
    render() {
        return (
            <div>
                <h1>Restaurant Lists</h1>
                {
                    this.state.lists ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Rating</th>
                                        <th>Edit</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.lists.map((item, i) =>
                                            // <div>


                                            //     <span>{item.name}</span>
                                            //     <span>{item.email}</span>
                                            //     <span>{item.id}</span>
                                            //     <span>{item.address}</span>
                                            //     <span>{item.rating}</span>

                                            // </div>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.address}</td>
                                                <td>{item.rating}</td>
                                                <td><Link to={"/update/"+item.id}><FontAwesomeIcon icon={faPen} color="black" /></Link>
                                                <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="Red" /></span>
                                                </td>
                                                
                                            </tr>

                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        : <p>Please Wait</p>

                }
            </div>
        );
    }
}

export default restaurantLists;
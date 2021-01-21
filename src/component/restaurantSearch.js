import React, { Component } from 'react';
import { Table,Form,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit,faPen,faTrash } from '@fortawesome/free-solid-svg-icons'

class restaurantSearch extends Component {
    constructor(){
        super()
        this.state={
            searchData:null,
            lastSearch:"", 
        }
    }
    search(key){
        console.warn(key)
        this.setState({lastSearch:key})
        fetch('http://localhost:3000/restaurant?q='+key).then((data)=>{
            data.json().then((resp)=>{
                console.warn("resp",resp)
                this.setState({searchData:resp})
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
                    this.search(this.state.lastSearch)
               })
            })
    }
    render() {
        return (
            <Container>
                <h1>Bk arogyam Branch Search</h1>
                
                <Form.Control type="text" onChange={(event)=>this.search(event.target.value)} placeholder="Search" />
                <div>
                    {
                        this.state.searchData?
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
                                this.state.searchData.map((item)=>
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
                            :"invalid name !"
                    }
                </div>
            </Container>
        );
    }
}

export default restaurantSearch;
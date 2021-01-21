import React, { Component } from 'react';
import {                            //importing Router elements from npm router-dom
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faList, faHome, faUpload, faCameraRetro, faSearch, faPlus, faUser, faHotel, faBlog, faDisease,
    faHandshake, faPhone
} from '@fortawesome/free-solid-svg-icons'
import {
    Navbar, Nav,         //importing the components in bootstrap
    Form,
    FormControl, Button
} from 'react-bootstrap'

class NavBarMenu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="lightgreen" expand="lg">
                    {/* <Navbar.Brand href="#home">BK Arogyam Pvt LTd</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" color="green">
                            <Nav.Link href="#home"><Link to="/"><img src="bka3.jpg" className="logo-bk" /></Link></Nav.Link>

                            <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome} color="green" />Home</Link></Nav.Link>
                            <Nav.Link href="#about"><Link to="/about"><FontAwesomeIcon icon={faHotel} color="green" />About Us</Link></Nav.Link>

                            <Nav.Link href="#link"><Link to="/lists"><FontAwesomeIcon icon={faList} color="green" />Lists</Link></Nav.Link>
                            <Nav.Link href="#blog"><Link to="/"><FontAwesomeIcon icon={faBlog} color="green" />Blog</Link></Nav.Link>
                            <Nav.Link href="#Disease"><Link to="/"><FontAwesomeIcon icon={faDisease} color="green" />Disease</Link></Nav.Link>

                            <Nav.Link href="#create"><Link to="/create"><FontAwesomeIcon icon={faPlus} color="green" />Create</Link></Nav.Link>
                            <Nav.Link href="#update"><Link to="/update"><FontAwesomeIcon icon={faUpload} color="green" />Update</Link></Nav.Link>
                            <Nav.Link href="#search"><Link to="/search"><FontAwesomeIcon icon={faSearch} color="green" />Search</Link></Nav.Link>
                            <Nav.Link href="#Join Us"><Link to="/"><FontAwesomeIcon icon={faHandshake} color="green" />Join Us</Link></Nav.Link>
                            <Nav.Link href="#contact"><Link to="/"><FontAwesomeIcon icon={faPhone} color="green" />Contact Us</Link></Nav.Link>

                            <Nav.Link href="#home"><Link to="/login"><FontAwesomeIcon icon={faUser} color="green" />Login</Link></Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

            </div>
        );
    }
}

export default NavBarMenu;
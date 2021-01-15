import React,{Component,Fragment } from "react";
import {Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import BrandLogo from '../../assets/img/syftet-logo.png';
import BrandLogo from '../../assets/img/syftet-logo.png';


class TopNavigation extends Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return(
            <Fragment>
                <div class="container-fluid nav-section">
                    {/* <nav className="navbar navbar-expand-md">
                        <a className="navbar-brand" href="#"><img src={BrandLogo} alt="syftet"></img></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="mr-auto"></div>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                            {/* <a className="nav-link"></a>
                            <NavLink to="/service">service</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/service">service</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/service">service</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/service">service</NavLink>
                            </li>
                            <li className="nav-item">
                            <Nav.Link><NavLink to="/service">service</NavLink></Nav.Link>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/service">service</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/service">service</NavLink>
                            </li>
                        </ul>
                        </div>
                    </nav> */}

                    
                    <Navbar  expand="md">
                        <NavLink to="/"><img src={BrandLogo} alt="syftet"></img></NavLink>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                       
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto"></Nav>
                            <Nav>
                                <Nav.Link><NavLink className="" to="/service">Service</NavLink></Nav.Link>
                                <Nav.Link><NavLink className="" to="/about-us">About Us</NavLink></Nav.Link>
                                <Nav.Link><NavLink className="" to="/">Portfolio</NavLink></Nav.Link>
                                <Nav.Link><NavLink className="" to="/team">Team</NavLink></Nav.Link>
                                <Nav.Link><NavLink className="" to="/career">Career</NavLink></Nav.Link>
                                <Nav.Link><NavLink className="" to="/">Blog</NavLink></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>





                </div>
            </Fragment>
        );
    }
}
export default TopNavigation;
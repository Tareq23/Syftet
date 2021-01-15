import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BrandLogo from '../../assets/img/brand-nav.png';

class Footer extends Component{
    constructor()
    {
        super()
        this.state = {

        }
    }
    render()
    {
        return (
            <Fragment>
                <footer className="footer-section mt-5">
                    <Container className="footer-top">
                        <Row >
                            <Col className="column" lg={3} md={6} sm={12}>
                                <a className="link" href="#"><img src={BrandLogo} alt=""></img></a>
                                <div className="text logo-text">
                                    <p>Our desire is to develop an idea of you that represents your personal and unique style, creating an environment that you will love for years to come. </p>
                                    <p className="text-white">Working Hours: <span>9.30am to 7.00pm</span></p>
                                    <p className="text-white">Weekend: <span>Sunday</span></p>
                                </div>
                            </Col>
                            <Col className="column" lg={3} md={6} sm={12}>
                                <h3>Navigation</h3>
                                <ul >
                                    <li><a className="link" href="#">career</a></li>
                                    <li><a className="link" href="#">portfolio</a></li>
                                    <li><a className="link" href="#">team member</a></li>
                                    <li><a className="link" href="#">service</a></li>
                                    <li><a className="link" href="#">about us</a></li>
                                    <li><a className="link" href="#">contact us</a></li>
                                </ul>
                            </Col>
                            <Col className="column" lg={3} md={6} sm={12}>
                                <h3>Location</h3>
                                <div>
                                    <h4>Head Office</h4>
                                    <p className="text">Address House #512 (3rd-floor), Road #07, Avenue #03, Mirpur DOHS, Pallabi, Dhaka 1216</p>
                                    <p className="text">Phone: 017659*****</p>
                                </div>
                                <div>
                                    <h4>UK Outlet</h4>
                                    <p className="text">83 Stewart road, E15 2 BA, London, UK</p>
                                    <p className="text">Email: <span>contact@mdtarequlislam.com</span></p>
                                </div>  
                            </Col>
                            <Col className="column" lg={3} md={6} sm={12}>
                                <h3>Recent Posts</h3>
                                <p><a href="#" className="link">Know more about syftet</a></p> 
                                <p className="text">since the 1500s, when an unknown printer took a galley of type and scrambled i </p>
                                <p><a href="#" className="link">Rails 5.2.0 FINAL: Active Storage, Redis Cache Store, HTTP/2 Early Hints, CSP, Credentials </a></p>
                                <p className="text">Nearly 14 years since the first public version of Rails, it’s our pleasure to </p>
                            </Col>
                        </Row>
                        <div className="hr"></div>
                        <Row className="bottom justify-content-center">
                            <Col lg={6} md={6} sm={12}>
                                <ul className="text-left pl-5">
                                    <li><a href="#"> <FontAwesomeIcon icon={faFacebook}/> </a></li>
                                    <li><a href="#"> <FontAwesomeIcon icon={faLinkedin}/> </a></li>
                                    <li><a href="#"> <FontAwesomeIcon icon={faYoutube}/> </a></li>
                                    <li><a href="#"> <FontAwesomeIcon icon={faTwitter}/> </a></li>
                                </ul>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <p className="text-right pr-5">Copyright   2021 <a href="#">Syftet</a> | All Rights Reserved.</p>
                            </Col>

                        </Row>
                    </Container>
                </footer>
            </Fragment>
        );
    }
}

export default Footer;
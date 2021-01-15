import React, { Component, Fragment } from 'react';

import RoR from '../../assets/img/technology-used/ror.png';
import PHP from '../../assets/img/technology-used/php.png';
import Angular from '../../assets/img/technology-used/angular-js.png';
import Android from '../../assets/img/technology-used/android.png';
import DotNet from '../../assets/img/technology-used/dot-net.png';
import UxUi from '../../assets/img/technology-used/ux-ui.png';
import Development from '../../assets/img/technology-used/deployment.png';
import Testing from '../../assets/img/technology-used/testing.png';
import Maintenance from '../../assets/img/technology-used/maintenance.png';

class Technology extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                <div className="about-section">
                    <div className="technology-used">
                        <div className="container">
                            <div className="top-text my-5 text-center">
                                <h1>What Technologies &amp; Services we provide?</h1>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-12">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src={RoR} alt="Ruby on Rails"></img>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">ruby on rails</h5>
                                            <p className="card-text">To build a modern web application is a daunting task. Ruby on Rails makes it much easier and more fun. It includes</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src={PHP} alt="Ruby on Rails"></img>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">php</h5>
                                            <p className="card-text">To build a modern web application is a daunting task. Ruby on Rails makes it much easier and more fun. It includes </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src={Angular} alt="Ruby on Rails"></img>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Angular js</h5>
                                            <p className="card-text">To build a modern web application is a daunting task. Ruby on Rails makes it much easier and more fun. It includes </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src={Android} alt="Ruby on Rails"></img>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Android</h5>
                                            <p className="card-text">To build a modern web application is a daunting task. Ruby on Rails makes it much easier and more fun. It includes </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src={DotNet} alt="Ruby on Rails"></img>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">.net</h5>
                                            <p className="card-text">To build a modern web application is a daunting task. Ruby on Rails makes it much easier and more fun. It includes </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src={UxUi} alt="Ruby on Rails"></img>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Ux-ui</h5>
                                            <p className="card-text">To build a modern web application is a daunting task. Ruby on Rails makes it much easier and more fun. It includes </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src={Development} alt="Ruby on Rails"></img>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">development</h5>
                                            <p className="card-text">To build a modern web application is a daunting task. Ruby on Rails makes it much easier and more fun. It includes </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src={Testing} alt="Ruby on Rails"></img>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">testing</h5>
                                            <p className="card-text">To build a modern web application is a daunting task. Ruby on Rails makes it much easier and more fun. It includes </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src={Maintenance} alt="Ruby on Rails"></img>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">maintenance</h5>
                                            <p className="card-text">To build a modern web application is a daunting task. Ruby on Rails makes it much easier and more fun. It includes </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Technology;
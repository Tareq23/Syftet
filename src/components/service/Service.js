import React,{Component,Fragment} from 'react';

import Web from '../../assets/img/service/web.jpg';
import UxUi from '../../assets/img/service/ui-ux.jpg';
import Mobile from '../../assets/img/service/android.jpg';
import Software from '../../assets/img/service/custom-software.jpg';
import Desktop from '../../assets/img/service/desktop.jpg';
import Maintenance from '../../assets/img/service/maintainence.jpg';

class Service extends Component{
    constructor(){
        super();
        this.state = {}
    }
    render(){
        return(
            <Fragment>
                <section className="service-section">
                    <div className="container text-center">
                        <div className="row justify-content-center">
                        <div className="col-md-8 col-sm-12">
                            <h1>best service</h1>
                            <p>We always use effective and efficient way of developing the applications/websites, so that it aids our clients on their long term success.
                            </p>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <div className="row">
                            <div className="col-12">
                                <div className="card">
                                <img className="card-img-top" src={Web} alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">WEB DEVELOPMENT</h5>
                                    <p className="card-text">More than 150+ web applications have been delivered to our clients from our excellent 5+ years experienced team.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card">
                                <img className="card-img-top" src={UxUi} alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">UX/ UI DESIGN</h5>
                                    <p className="card-text">Our prominent UI and UX Design experience have high conversion rates & more power to enrich products with our client’s needs.</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="row">
                            <div className="col-12">
                                <div className="card">
                                <img className="card-img-top" src={Mobile} alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">MOBILE DEVELOPMENT</h5>
                                    <p className="card-text">We have developers who have highly expertized themselves in Mobile application development, making daily life of our clients easier and better.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card">
                                <img className="card-img-top" src={Software} alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">CUSTOM SOFTWARE</h5>
                                    <p className="card-text">If you require any custom based software, we have a service for in-house development.</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="row">
                            <div className="col-12">
                                <div className="card">
                                <img className="card-img-top" src={Desktop} alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">DESKTOP APPLICATION</h5>
                                    <p className="card-text">We have developed different platforms in ASP.net applications from WebForms to different versions of MVC, WCF, WPF (web and mobile), EF, Web API.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card">
                                <img className="card-img-top" src={Maintenance} alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">MAINTENANCE</h5>
                                    <p className="card-text">We help our clients to maintain the toughest data challenges, predict demand for products and services.</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Service;
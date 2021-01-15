import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React ,{Component, Fragment} from 'react';
import VideoThumbnail from '../../assets/img/traning/traning.jpg';
import Reliable from '../../assets/img/unique/reliable.png';
import Solution from '../../assets/img/unique/solution.png';
import Experience from '../../assets/img/unique/experience.png';
import Affordable from '../../assets/img/unique/affordable.png';
import GlobalOperation from '../../assets/img/unique/global-operations.png';
import ProvenExcellence from '../../assets/img/unique/proven-excellence.png';

class About extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render()
    {
        return(
            <Fragment>
                <div className="about-section mt-5">
                    <div className="container">
                            <div className="row">
                            <div className="col-md-7 text-area">
                                <h1>WE HAVE A WIDE BREADTH OF EXPERIENCE</h1>
                                <h3>We are independent and free from third party influence. </h3>
                                <p>Syftet is a fast growing software product and services company in Bangladesh. Our journey started in 2016, But within a very short time, Syftet successfully tracked records of delivering innovative and cost-effective technical services to customers in both Corporate and Public sectors. We follow agile methodologies for developing software. We have a team of talented engineers and they are fully devoted to serving the customers in software developing problems. We are experts in Ruby on Rails, .Net, PHP, Java, Android. Building valuable relationship by providing desired final product is the main goal of Syftet. It always continuously works to satisfy the customers. We have professionalized us in software development area. Syftet also works to innovate and to have continues development in the process. It has launched several applications. It works with Bequent, Secret Chat, Biometric Authentication, School Management, Point of Sale(POS) for the easier life of the customers. </p>
                                {/* <a href="https://www.youtube.com/channel/UCVPyFdbHv5haeqL-3bpVIEg/videos" target="_blank" className="btn btn-primary">Watch More Video</a> */}
                            </div>
                            <div className="col-md-5 video-area">
                                <img className="img-fluid" src={VideoThumbnail} alt="video thumnail"></img>
                                <i className="far fa-play-circle video-icon" data-toggle="modal" data-target="#exampleModalCenter"></i>
                                <FontAwesomeIcon icon="faPlayCircle" className="video-icon" />

                                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                    <div className="modal-body">
                                        {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/eQwXqXX8imc" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="unique-us">
                        <h1>What make us unique?</h1>
                        <div className="row justify-content-center">
                            <div className="col-md-4 col-sm-12">
                                <div className="card">
                                    <div className="card-img-left">
                                        <img src={Reliable} alt="reliable syftet"></img>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Reliable</h5>
                                        <p className="card-text">Syftet is a renowned offshore company. We believe in building and maintaining long-term relationships with all our clients
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="card">
                                    <div className="card-img-left ">
                                        <img src={Solution} alt="reliable syftet"></img>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Solutions</h5>
                                        <p className="card-text">We endeavor to offer you best solutions in order to acquire your maximum satisfaction. We are the masters in offering effective.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="card">
                                    <div className="card-img-left">
                                        <img src={Experience} alt="reliable syftet"></img>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Experience</h5>
                                        <p className="card-text">We are the pioneer in lambasting problems like web or software development etc. Our experts handle your assigned projects prudently. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="card">
                                    <div className="card-img-left">
                                        <img src={Affordable} alt="reliable syftet"></img>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Affordable</h5>
                                        <p className="card-text">We have provided best plus affordable web development services to numerous large as well as medium entrepreneurs. Read More... </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="card">
                                    <div className="card-img-left">
                                        <img src={GlobalOperation} alt="reliable syftet"></img>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Global Operations</h5>
                                        <p className="card-text">We stay focused on aligning the highest-level company priorities with strong day-to-day operations, and help evolve early stage ideas into future-growth initiatives. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="card">
                                    <div className="card-img-left">
                                        <img src={ProvenExcellence} alt="reliable syftet"></img>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Proven Excellence </h5>
                                        <p className="card-text">We have experience in a consulting development environment (or similar), and we are a self-starter who can work in a rapidly changing industry.
                                        </p>
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

export default About;
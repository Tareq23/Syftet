import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{Component, Fragment} from 'react';
import Img1 from '../../assets/img/team/03.jpg';
import Mahbub from '../../assets/img/team/mahbub2.jpg';
import Mezbah from '../../assets/img/team/Mezbah.jpg';
import Nazmul from '../../assets/img/team/nazrul.png';
import NurAlom from '../../assets/img/team/nur_alam.jpg';
import Pias from '../../assets/img/team/pias.png';
import Tuhin from '../../assets/img/team/Tuhin.JPG';
import Ziko from '../../assets/img/team/ziko.png';

class TeamSection extends Component{
    constructor()
    {
        super();
        this.state={}
    }
    render(){
        return(
            <Fragment>
                <section className="team-section mt-5">
                    <div className="container ">
                        <h2 className="text-center mb-5">Our Valuable Team</h2>
                        <div className="row ">
                            <div class="col-md-4 col-sm-12">
                                <div className="card">
                                    <div className="justify-content-center card-img-top">
                                        <img src={Ziko} alt="team member"></img>
                                    </div>
                                    <div className="card-body mt-3">
                                        <div className="body-head">
                                        <h1>name</h1>
                                        {/* <!-- <span>position</span> --> */}
                                        <div class="mr-auto"></div>
                                        <ul class="nav">
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faFacebook}/> </a>
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faTwitter}/> </a>
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faLinkedin}/> </a>
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faGithub}/> </a>
                                        </ul>
                                        </div>
                                        <div className="text">
                                        <p>Senior Lead Web and mobile Developer specializing in frontend and backend development. Experienced</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-12">
                                <div className="card">
                                    <div className="justify-content-center card-img-top">
                                        <img src={Tuhin} alt="team member"></img>
                                    </div>
                                    <div className="card-body mt-3">
                                        <div className="body-head">
                                        <h1>name</h1>
                                        {/* <!-- <span>position</span> --> */}
                                        <div class="mr-auto"></div>
                                        <ul class="nav">
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faFacebook}/> </a>
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faTwitter}/> </a>
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faLinkedin}/> </a>
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faGithub}/> </a>
                                        </ul>
                                        </div>
                                        <div className="text">
                                        <p>Senior Lead Web and mobile Developer specializing in frontend and backend development. Experienced</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-12">
                                <div className="card">
                                    <div className="justify-content-center card-img-top">
                                        <img src={Pias} alt="team member"></img>
                                    </div>
                                    <div className="card-body mt-3">
                                        <div className="body-head">
                                        <h1>name</h1>
                                        {/* <!-- <span>position</span> --> */}
                                        <div class="mr-auto"></div>
                                        <ul class="nav">
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faFacebook}/> </a>
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faTwitter}/> </a>
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faLinkedin}/> </a>
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faGithub}/> </a>
                                        </ul>
                                        </div>
                                        <div className="text">
                                        <p>Senior Lead Web and mobile Developer specializing in frontend and backend development. Experienced</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-12">
                                <div className="card">
                                    <div className="justify-content-center card-img-top">
                                        <img src={Mahbub} alt="team member"></img>
                                    </div>
                                    <div className="card-body mt-3">
                                        <div className="body-head">
                                        <h1>name</h1>
                                        {/* <!-- <span>position</span> --> */}
                                        <div class="mr-auto"></div>
                                        <ul class="nav">
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faFacebook}/> </a>
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faTwitter}/> </a>
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faLinkedin}/> </a>
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faGithub}/> </a>
                                        </ul>
                                        </div>
                                        <div className="text">
                                        <p>Senior Lead Web and mobile Developer specializing in frontend and backend development. Experienced</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-12">
                                <div className="card">
                                    <div className="justify-content-center card-img-top">
                                        <img src={NurAlom} alt="team member"></img>
                                    </div>
                                    <div className="card-body mt-3">
                                        <div className="body-head">
                                        <h1>name</h1>
                                        {/* <!-- <span>position</span> --> */}
                                        <div class="mr-auto"></div>
                                        <ul class="nav">
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faFacebook}/> </a>
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faTwitter}/> </a>
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faLinkedin}/> </a>
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faGithub}/> </a>
                                        </ul>
                                        </div>
                                        <div className="text">
                                        <p>Senior Lead Web and mobile Developer specializing in frontend and backend development. Experienced</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-12">
                                <div className="card">
                                    <div className="justify-content-center card-img-top">
                                        <img src={Nazmul} alt="team member"></img>
                                    </div>
                                    <div className="card-body mt-3">
                                        <div className="body-head">
                                        <h1>name</h1>
                                        {/* <!-- <span>position</span> --> */}
                                        <div class="mr-auto"></div>
                                        <ul class="nav">
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faFacebook}/> </a>
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faTwitter}/> </a>
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faLinkedin}/> </a>
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faGithub}/> </a>
                                        </ul>
                                        </div>
                                        <div className="text">
                                        <p>Senior Lead Web and mobile Developer specializing in frontend and backend development. Experienced</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-12">
                                <div className="card">
                                    <div className="justify-content-center card-img-top">
                                        <img src={Mezbah} alt="team member"></img>
                                    </div>
                                    <div className="card-body mt-3">
                                        <div className="body-head">
                                        <h1>name</h1>
                                        {/* <!-- <span>position</span> --> */}
                                        <div class="mr-auto"></div>
                                        <ul class="nav">
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faFacebook}/> </a>
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faTwitter}/> </a>
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faLinkedin}/> </a>
                                            <a href="" className="nav-link"><FontAwesomeIcon icon={faGithub}/> </a>
                                        </ul>
                                        </div>
                                        <div className="text">
                                        <p>Senior Lead Web and mobile Developer specializing in frontend and backend development. Experienced</p>
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

export default TeamSection;
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Button } from 'bootstrap';
import React,{Component,Fragment} from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap';



class Career extends Component{
    constructor()
    {
        super();
        this.state = {

        }
    }
    render(){
        return(
            <Fragment>
                <Container >
                    <Row className="mt-5 career">
                        <Col className="developer-section" lg={7} md={7} sm={12}>
                            <div className="common-text">
                                <h2>LARAVEL DEVELOPER</h2>
                                <a href="#">Syftet Limited</a>
                            </div>
                            <div>
                                <p className="jumbotron">Only short-listed candidates will be called for interview. Applicant must enclose his/her instant photograph with CV.</p>
                                <p>Do you like writing mean and clean Laravel? Come join our team and help us build amazing things. We’re looking for someone with a passion for programming and for writing beautiful code.
                                Syftet is a fast growing software firm in Bangladesh. Since 2015, We are serving the best IT solutions in home and abroad.</p>
                            </div>
                            <div className="common-text">
                                <h3>JOB DESCRIPTION / RESPONSIBILITY</h3>
                                <ul>
                                    <li>Write clean, maintainable and efficient code.</li>
                                    <li>Design robust, scalable and secure features.</li>
                                    <li>Contribute in all phases of the development life-cycle.</li>
                                    <li>Follow best practices (test-driven development, continuous integration, SCRUM, refactoring and code standards).</li>
                                    <li>Drive continuous adoption and integration of relevant new technologies into design.</li>
                                </ul>
                            </div>
                            <div className="common-text">
                                <h3>SKILLS AND QUALIFICATIONS</h3>
                                <ol>
                                    <li>A minimum of 1 years of professional, full-time Laravel experience.</li>
                                    <li>A proven track record of developing applications with Laravel.</li>
                                    <li>In-depth knowledge of WordPress, Node.js, AngularJS will get preference.</li>
                                    <li>Solid experience with modern unit testing practices.</li>
                                    <li>Having highly interactive applications published is a plus.</li>
                                    <li>A clear understanding of object oriented analysis and design.</li>
                                </ol>
                            </div>
                        </Col>
                        <Col className="job-section" lg={5} md={5} sm={12}>
                            <div className="job-summary">
                                <h3>Job Summary</h3>
                                <p>Published On: <span> 24 September 2018</span></p>
                                <p>Vacancy: <span>2</span></p>
                                <p>Age: <span>20 to 30 years</span></p>
                                <p>Job Location: <span>DOHS, Mirpur-12, Dhaka, Bangladesh</span></p>
                                <p>Application Deadline: <span>30 September 2018</span></p>
                            </div>
                            <div className="common-text">
                                <h3>EDUCATIONAL REQUIREMENTS</h3>
                                <p>BSc in Computer Science and Engineering</p>
                            </div>
                            <div className="common-text">
                                <h3>SALARY RANGE</h3>
                                <p>20k-30K based on experience</p>
                            </div>
                            <div className="common-text">
                                <h3>OTHER BENEFITS</h3>
                                <p>According to company policy</p>
                            </div>
                            <Button><FontAwesomeIcon icon={faPlusSquare} className="plus-icon"/> Apply Now</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Career;





import { faCodepen, faFontAwesome, faProductHunt, faRProject } from '@fortawesome/free-brands-svg-icons';
import React,{Component,Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faSmile } from '@fortawesome/free-regular-svg-icons';
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';


class Counter extends Component{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <Fragment>
                <section className="counter-section">
                    <div className="container-fluid ">
                        <div className="row ">
                        <div className="col-md-6 col-lg-3">
                            <article className="counter-box ">
                            <div className="icon">
                                {/* <i className="fas fa-check-circle"></i> */}
                                <FontAwesomeIcon icon={faCheckCircle} />
                            </div>
                            <div className="number">
                                <h1>

                                    <CountUp start={0} end={89}>
                                        {
                                            ({countUpRef,start}) => (
                                            
                                                <ReactVisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </ReactVisibilitySensor>
                                            // <div>
                                            //     <span ref={countUpRef} />
                                            //     <button onClick={start}>start</button>
                                            // </div>
                                            )
                                        }
                                    </CountUp>
                                    
                                    <span>%</span>
                                </h1>
                            </div>
                            <div className="text">
                                <p>Project Success Rate</p>
                            </div>
                            </article>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <article className="counter-box">
                            <div className="icon">
                                {/* <i className="fas fa-smile"></i> */}
                                <FontAwesomeIcon icon={faSmile}/>
                            </div>
                            <div className="number">
                                <h1>
                                    
                                    <CountUp start={0} end={100}>
                                        {
                                            ({countUpRef,start}) => (
                                                <ReactVisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </ReactVisibilitySensor>    
                                                // <div>
                                                //     <span ref={countUpRef} />
                                                //     <button onClick={start}>start</button>
                                                // </div>
                                            )
                                        }
                                    </CountUp>
                                    
                                    <span>%</span>
                                </h1>
                            </div>
                            <div className="text">
                                <p>Client Positive Feedback</p>
                            </div>
                            </article>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <article className="counter-box">
                            <div className="icon">
                                {/* <i className="fas fa-code"></i> */}
                                <FontAwesomeIcon icon={faCodepen}/>
                            </div>
                            <div className="number">
                                <h1>
                                    <CountUp start={0} end={100} >
                                        {
                                            ({countUpRef,start}) =>(
                                                <ReactVisibilitySensor onChange={start} delayedCall >
                                                    <span ref={countUpRef}></span>
                                                </ReactVisibilitySensor>
                                                // <div>
                                                //     <span ref={countUpRef} onClick={start}/>
                                                //     {/* <button onClick={start}>start</button> */}
                                                // </div>
                                            )
                                        }
                                    </CountUp>
                                    <span>%</span>
                                </h1>
                            </div>
                            <div className="text">
                                <p>Test Code Coverage</p>
                            </div>
                            </article>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <article className="counter-box">
                            <div className="icon">
                                {/* <i className="fas fa-project-diagram"></i> */}
                                <FontAwesomeIcon icon={faProductHunt} />
                            </div>
                            <div className="number">
                                <h1>
                                    <CountUp start={0} end={183} >
                                        {
                                            ({countUpRef,start})=>(
                                                <ReactVisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} ></span>
                                                </ReactVisibilitySensor>
                                            )
                                        }
                                    </CountUp>
                                </h1>
                            </div>
                            <div className="text">
                                <p>Project Completed</p>
                            </div>
                            </article>
                        </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Counter;
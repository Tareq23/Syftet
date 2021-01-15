import React, { Component, Fragment } from 'react';
import Iframe from 'react-iframe';


class MailMap extends Component{
    constructor()
    {
        super();
        this.state = {
            submit : "Submit"
        }
    }

    render(){
        return (
            <Fragment>
                <section className="mail-map-section">
                    <div className="container">
                        <h1 className="py-3">Get a Quote</h1>
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <form action="" className="form">
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input id="name" type="text"  className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" id="email"  className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label for="subject">Subject</label>
                                    <input type="text" id="subject"  className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label for="message">Message</label>
                                    <textarea id="message"  className="form-control"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btn btn-dark" value={this.state.submit}></input>
                                </div>
                                </form>
                            </div>
                            <div className="col-md-6 col-sm-12 pb-5">
                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.3318241481795!2d90.41366998667847!3d23.79498890533766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a76570e9a5%3A0x5ba1676097ae7953!2sIslami%20Bank%20Bangladesh%20Limited%20%7C%20Gulshan%20Branch!5e0!3m2!1sen!2sbd!4v1610131895254!5m2!1sen!2sbd" style={{width:"800px",height:"450px",border:"0px"}} allowfullscreen="" frameborder="0" aria-hidden="false" tabindex="0"></iframe> */}
                                
                                {/* <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.3318241481795!2d90.41366998667847!3d23.79498890533766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a76570e9a5%3A0x5ba1676097ae7953!2sIslami%20Bank%20Bangladesh%20Limited%20%7C%20Gulshan%20Branch!5e0!3m2!1sen!2sbd!4v1610131895254!5m2!1sen!2sbd"
                                width="450px"
                                height="450px"
                                id="myId"
                                className="react-iframe"
                                display="initial"
                                position="relative"/> */}
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default MailMap;
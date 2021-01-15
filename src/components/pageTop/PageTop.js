import React,{Component,Fragment} from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class PageTop extends Component{
    constructor()
    {
        super();
        this.state = {}
    }
    render(){
        return (
            <Fragment>
                <Container fluid className="p-0">
                    <Row>
                        <Col>
                            <div className="pageTop">
                                <div className="pageTopOverlay">
                                    <h1>{this.props.pageTitle}</h1>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default PageTop;






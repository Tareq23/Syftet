import { faCreativeCommonsSampling } from '@fortawesome/free-brands-svg-icons';
import React,{Component,Fragment} from 'react';
import TopNavigation from '../components/topNavigation/TopNavigation';
import PageTop from '../components/pageTop/PageTop';
import Service from '../components/service/Service';
import Footer from '../components/footer/Footer';




class ServicePage extends Component{
    constructor()
    {
        super();
        this.state={}
    }

    render(){
        return(
            <Fragment>
                <TopNavigation />
                <PageTop pageTitle = "Service Section" />
                <Service />
                <Footer />
            </Fragment>
        )
    }
}

export default ServicePage;

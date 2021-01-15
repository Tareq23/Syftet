import React,{Component,Fragment} from 'react';
import About from '../components/aboutSection/About';
import Footer from '../components/footer/Footer';
import MailMap from '../components/mailMap/MailMap';
import PageTop from '../components/pageTop/PageTop';
// import Service from '../components/service/Service';
import TopNavigation from '../components/topNavigation/TopNavigation';






class AboutPage extends Component{
    constructor()
    {
        super();
        this.state={}
    }

    render(){
        return(
            <Fragment>
                <TopNavigation />
                <PageTop pageTitle = "About Section" />
                <MailMap />
                <About />
                <Footer />
            </Fragment>
        )
    }
}

export default AboutPage;








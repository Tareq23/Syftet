import React,{Component,Fragment} from 'react';
// import About from '../components/aboutSection/About';
import Career from '../components/career/Career';
import Footer from '../components/footer/Footer';
import PageTop from '../components/pageTop/PageTop';
// import Service from '../components/service/Service';
import TopNavigation from '../components/topNavigation/TopNavigation';






class CareerPage extends Component{
    constructor()
    {
        super();
        this.state={}
    }

    render(){
        return(
            <Fragment>
                <TopNavigation />
                <PageTop pageTitle = "Career Section" />
                <Career />
                <Footer />
            </Fragment>
        )
    }
}

export default CareerPage;








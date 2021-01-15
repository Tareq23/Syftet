import React,{Component,Fragment} from 'react';
import About from '../components/aboutSection/About';
import Counter from '../components/counterSection/Counter';
import Footer from '../components/footer/Footer';
import MailMap from '../components/mailMap/MailMap';
import Service from '../components/service/Service';
import TeamSection from '../components/teamSection/TeamSection';
import TopBanner from '../components/topBanner/TopBanner';
import TopNavigation from '../components/topNavigation/TopNavigation';
import Technology from '../components/usedTechnology/Technology';


class HomePage extends Component{
    constructor()
    {
        super();
        this.state={}
    }
    render(){
        return (
            <Fragment>
                <TopNavigation />
                <TopBanner />
                <Service />
                <Counter />
                <About />
                <Technology/>
                <TeamSection/>
                <MailMap />
                <Footer />
            </Fragment>
        );
    }
}

export default HomePage;



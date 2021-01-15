import React,{Component,Fragment} from 'react';
// import About from '../components/aboutSection/About';
import Footer from '../components/footer/Footer';
import PageTop from '../components/pageTop/PageTop';
import TeamSection from '../components/teamSection/TeamSection';
// import Service from '../components/service/Service';
import TopNavigation from '../components/topNavigation/TopNavigation';






class TeamPage extends Component{
    constructor()
    {
        super();
        this.state={}
    }

    render(){
        return(
            <Fragment>
                <TopNavigation />
                <PageTop pageTitle = "Team Section" />
                <TeamSection />
                <Footer />
            </Fragment>
        )
    }
}

export default TeamPage;








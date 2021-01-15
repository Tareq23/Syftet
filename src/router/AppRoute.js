import React,{Component,Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import CareerPage from '../pages/CareerPage';
import HomePage from '../pages/HomePage';
import ServicePage from '../pages/ServicePage';
import TeamPage from '../pages/TeamPage';


class AppRoute extends Component{
    constructor()
    {
        super();
        this.state = {}
    }
    render()
    {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about-us" component={AboutPage} />
                    <Route exact path="/service" component={ServicePage} />
                    <Route exact path="/team" component={TeamPage} />
                    <Route exact path="/career" component={CareerPage} />
                </Switch>
            </Fragment>
        )
    }
}


export default AppRoute;
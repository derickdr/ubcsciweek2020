import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SciWeekSplash from './SciWeekSplash';
import SciWeekInformationSection from './SciWeekInformationSection';
import ScheduleOverviewSection from './ScheduleOverviewSection';
import { Route, Switch, Redirect } from 'react-router-dom';

class Routes extends Component {
    render() {
        return (
            <>
                <NavBar />
                <Switch>
                    <Route exact path='/Home' component={SciWeekSplash} />
                    <Route exact path='/About' component={SciWeekInformationSection} />
                    <Route exact path='/Events' component={ScheduleOverviewSection} />
                </Switch>
            </>
        );
    };
}
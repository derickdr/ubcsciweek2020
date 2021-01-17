import React, { Component } from 'react';
import NavBar from './NavBar';
import SciWeekSplash from './SciWeekSplash';
import SciWeekInformationSection from './SciWeekInformationSection';
import ScheduleOverviewSection from './ScheduleOverviewSection';
import ContactSection from './ContactSection';
import SponsorSection from './SponsorSection';

class HomePage extends Component {
    render() {
        return (
            <>
                <NavBar />
                <SciWeekSplash />
                <SciWeekInformationSection />
                <ScheduleOverviewSection />
                <ContactSection />
                <SponsorSection />
            </>
        );
    };
};

export default HomePage;
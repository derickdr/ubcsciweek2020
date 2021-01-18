import React, { Component } from 'react';
import SciWeekSplash from './SciWeekSplash';
import SciWeekInformationSection from './SciWeekInformationSection';
import ScheduleOverviewSection from './ScheduleOverviewSection';
import ContactSection from './ContactSection';
import SponsorSection from './SponsorSection';

class HomePage extends Component {
    render() {
        return (
            <>
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
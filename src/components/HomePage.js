import React, { Component } from 'react';
import NavBar from './NavBar';
import SciWeekSplash from './SciWeekSplash';
import SciWeekInformationSection from './SciWeekInformationSection';
import ScheduleOverviewSection from './ScheduleOverviewSection';
import SponsorSection from './SponsorSection';

function HomePage() {
    return (
        <>
            <NavBar />
            <SciWeekSplash />
            <SciWeekInformationSection />
            <ScheduleOverviewSection />
            <SponsorSection />
        </>
    );
}

export default HomePage;
import React, { Component } from 'react';

function HomePage() {
    return (
        <>
            <Navbar />
            <SciWeekSplash />
            <SciWeekInformationSection />
            <ScheduleOverviewSection />
            <SponsorSection />
        </>
    );
}

export default HomePage;
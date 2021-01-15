import React, { Component } from 'react';

class SciWeekInformationSection extends Component {
    render() {
        return (
            <div class='about-container'>
                <div class='about-content-header'>
                    <h1 class='about-header-text'>About</h1>
                </div>
                <div class='separator-row'>
                    <div class='separator-line'></div>
                </div>
                <div class='about-content'>
                    <p class='about-content-text'>
                        In this great galaxy of UBC where we call home,
                        superheroes from every planet work diligently
                        to fight crime. However, we want to dedicate a
                        week to you, heroes on the planet of Science,
                        to celebrate your hard work and give you a
                        full week of exclusive superhero activities.
                        SUS presents to you...
                        <span class='bold'>Super Sci Week 2021!</span>
                    </p>
                </div>
                <div class='about-content'>
                    <p class='about-content-text'>
                        From <span class='underlined'>Monday, January
                        18th</span> to <span class='underlined'>Friday
                        January 22nd</span>, unwind with events like
                        Yoga and Bullet Journaling or learn a new skill
                        like our Painting and Cooking Events. Jump into
                        action by crushing games during our Virtual
                        Escape Room and Trivia Night or simply meet other
                        heroes at our Clubs Day and Sustainability
                        events. Finally, finish off the week by flexing
                        your superpower at the “UBC Galactical Idol”
                        Talent Show.
                    </p>
                </div>
                <div class='about-content'>
                    <p class='about-content-text'>
                        Throughout the week, win prizes at individual
                        events, be entered in draws, and collect Infinity
                        Stones at each event- the more the stones, the
                        higher the chance of winning Apple AirPod Pros
                        for the Super Sci Week 2021 grand prize.
                    </p>
                </div>
                <div class='about-content'>
                    <p class='about-content-text'>
                        What are you waiting for? Crime isn’t gonna stop
                        itself and the sign-up forms aren’t gonna fill up
                        by themselves! 
                    </p>
                </div>
            </div>
        );
    };
};

export default SciWeekInformationSection;
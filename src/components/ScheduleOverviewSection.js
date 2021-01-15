import React, { Component } from 'react';

// Overview of Super Sci Week 2021
// Monday, January 18th: 
//  Operation Stone-Seeker (virtual escape room) 
//      Time: 11:00pm-4:00pm PST
//      Where:  ________
//  (Yo)galactic Stretching (yoga session) 
//      Time: 5:00pm-7:00pm PST
//      Where: https://zoom.us/j/98134029112

// Tuesday, January 19th:
//  Bob Ross Painting (painting session with the AMS Paint Club)
//      Time: 7:30pm-8:30pm PST
//      Where: https://zoom.us/j/99217554824

// Wednesday, January 20th:
//  “Catch a Bullet” Journaling (bullet journaling with Alex from @lexiesdesk)
//      Time: 3:00pm-4:00pm PST
//      Where: https://zoom.us/j/97887065823
//  Megamind Trivia (trivia night with the Astronomy club) 
//      Time: 7:00pm-8:30pm PST
//      Where: https://us02web.zoom.us/j/87080734958

// Thursday, January 21st: 
//  Clubs League (clubs day) 
//      Time: __pm-__pm PST
//      Where:  ____________

// Friday, January 22nd: 
//  Serving Up Justice with Inga Lam (cooking session) 
//      Time:  __pm-__pm PST
//      Where:  https://zoom.us/j/93135322512
//  Galactical Idol (UBC Science talent show)
//      Time: __pm-__pm PST 
//      Where (location of all videos): https://www.youtube.com/channel/UC-3akI0PgZVdoONZtOpVZ0A


class ScheduleOverviewSection extends Component {
    render() {
        return (
            <div class='schedule-container'>
                <div class='schedule-row1'>
                    <div class='monday-container'>

                    </div>
                    <div class='tuesday-container'>

                    </div>
                </div>
                <div class='schedule-row2'>
                    <div class='wednesday-container'>

                    </div>
                    <div class='thursday-container'>

                    </div>
                </div>
                <div class='schedule-row3'>
                    <div class='friday-container'>

                    </div>
                </div>
            </div>
        );
    };
};

export default ScheduleOverviewSection;
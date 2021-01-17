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
                <div class='row'>
                    <div class='schedule-header'>
                        <h1 class='schedule-header-text'>Week of Events</h1>
                    </div>
                </div>
                <div class='row'>
                    <div class='monday-container'>
                        <div class='header'>
                            <h1 class='header-text'>18 / 01 - Monday</h1>
                        </div>
                        <div class='day-content'>
                            <h1 class='event-name'>Operation Stone-Seeker</h1>
                            <h2 class='event-details'>(Virtual escape room)</h2>
                            <h2 class='event-details'>Time: 11:00 AM-4:00 PM PST</h2>
                            <h2 class='event-details'>Where: <a href='https://zoom.us/j/92291748382' target='_blank' rel='noopener noreferrer'>Zoom</a></h2>
                            <div class='event-action-row'>
                                <div class='event-action-column'>
                                    <div class='event-action-button-row'>
                                        <div class='event-action-button'>
                                            <a class='event-action-button-text' href='https://fb.me/e/1pWWI0Q15' target='_blank' rel='noopener noreferrer'>Sign Up</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='day-content'>
                            <h1 class='event-name'>(Yo)galactic Stretching</h1>
                            <h2 class='event-details'>(Yoga session)</h2>
                            <h2 class='event-details'>Time: 5:00-6:00 PM PST</h2>
                            <h2 class='event-details'>Where: <a href='https://zoom.us/j/98134029112' target='_blank' rel='noopener noreferrer'>Zoom</a></h2>
                            <div class='event-action-row'>
                                <div class='event-action-column'>
                                    <div class='event-action-button-row'>
                                        <div class='event-action-button'>
                                            <a class='event-action-button-text' href='https://fb.me/e/24tjZk42T' target='_blank' rel='noopener noreferrer'>Sign Up</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='row'>
                    <div class='panel3-1'></div>
                </div>
                <div class='row'>
                    <div class='tuesday-container'>
                        <div class='header'>
                            <h1 class='header-text'>19 / 01 - Tuesday</h1>
                        </div>
                        <div class='day-content'>
                            <h1 class='event-name'>Bob Ross Painting</h1>
                            <h2 class='event-details'>(Painting session w/ AMS Paint Club)</h2>
                            <h2 class='event-details'>Time: 7:30-8:30 PM PST</h2>
                            <h2 class='event-details'>Where: <a href='https://zoom.us/j/99217554824' target='_blank' rel='noopener noreferrer'>Zoom</a></h2>
                            <div class='event-action-row'>
                                <div class='event-action-column'>
                                    <div class='event-action-button-row'>
                                        <div class='event-action-button'>
                                            <a class='event-action-button-text' href='https://www.facebook.com/events/371193367661431/' target='_blank' rel='noopener noreferrer'>Sign Up</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='row'>
                    <div class='panel4-1'></div>
                </div>
                <div class='row'>
                    <div class='wednesday-container'>
                        <div class='header'>
                            <h1 class='header-text'>20 / 01 - Wednesday</h1>
                        </div>
                        <div class='day-content'>
                            <h1 class='event-name'>“Catch a Bullet” Journaling</h1>
                            <h2 class='event-details'>(Bullet journaling w/ Alex from @lexiesdesk)</h2>
                            <h2 class='event-details'>Time: 3:00-4:00 PM PST</h2>
                            <h2 class='event-details'>Where: <a href='https://zoom.us/j/97887065823' target='_blank' rel='noopener noreferrer'>Zoom</a></h2>
                            <div class='event-action-row'>
                                <div class='event-action-column'>
                                    <div class='event-action-button-row'>
                                        <div class='event-action-button'>
                                            <a class='event-action-button-text' href='https://www.facebook.com/events/207985471053075/' target='_blank' rel='noopener noreferrer'>Sign Up</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='day-content'>
                            <h1 class='event-name'>Megamind Trivia</h1>
                            <h2 class='event-details'>(Trivia night w/ Astronomy club)</h2>
                            <h2 class='event-details'>Time: 7:00-8:30 PM PST</h2>
                            <h2 class='event-details'>Where: <a href='https://us02web.zoom.us/j/87080734958' target='_blank' rel='noopener noreferrer'>Zoom</a></h2>
                            <div class='event-action-row'>
                                <div class='event-action-column'>
                                    <div class='event-action-button-row'>
                                        <div class='event-action-button'>
                                            <a class='event-action-button-text' href='https://fb.me/e/3IWSZ1fvU' target='_blank' rel='noopener noreferrer'>Sign Up</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='row'>
                    <div class='panel3-2'></div>
                </div>
                <div class='row'>
                    <div class='thursday-container'>
                        <div class='header'>
                            <h1 class='header-text'>21 / 01 - Thursday</h1>
                        </div>
                        <div class='day-content'>
                            <h1 class='event-name'>Clubs League</h1>
                            <h2 class='event-details'>(Clubs day)</h2>
                            <h2 class='event-details'>Time: 12:30-3:30 PM PST</h2>
                            <h2 class='event-details'>Where: WIP</h2>
                            <div class='event-action-row'>
                                <div class='event-action-column'>
                                    <div class='event-action-button-row'>
                                        <div class='event-action-button'>
                                            <a class='event-action-button-text' href='https://fb.me/e/1YV9TZmYa' target='_blank' rel='noopener noreferrer'>Sign Up</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='row'>
                    <div class='panel4-2'></div>
                </div>
                <div class='row'>
                    <div class='friday-container'>
                        <div class='header'>
                            <h1 class='header-text'>22 / 01 - Friday</h1>
                        </div>
                        <div class='day-content'>
                            <h1 class='event-name'>Serving Up Justice with Inga Lam</h1>
                            <h2 class='event-details'>(Cooking session)</h2>
                            <h2 class='event-details'>Time: 4 PM PST</h2>
                            <h2 class='event-details'>Where: <a href='https://zoom.us/j/93135322512' target='_blank' rel='noopener noreferrer'>Zoom</a></h2>
                            <div class='event-action-row'>
                                <div class='event-action-column'>
                                    <div class='event-action-button-row'>
                                        <div class='event-action-button'>
                                            <a class='event-action-button-text' href='https://fb.me/e/LHjcJJMP' target='_blank' rel='noopener noreferrer'>Sign Up</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='day-content'>
                            <h1 class='event-name'>Galactical Idol</h1>
                            <h2 class='event-details'>(UBC Science talent show)</h2>
                            <h2 class='event-details'>Time: 11:59 PM PST</h2>
                            <h2 class='event-details'>Where (location of all videos): <a href='https://www.youtube.com/channel/UC-3akI0PgZVdoONZtOpVZ0A' target='_blank' rel='noopener noreferrer'>YouTube</a></h2>
                            <div class='event-action-row'>
                                <div class='event-action-column'>
                                    <div class='event-action-button-row'>
                                        <div class='event-action-button'>
                                            <a class='event-action-button-text' href='https://fb.me/e/I3hUKtLK' target='_blank' rel='noopener noreferrer'>Sign Up</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='row'>
                    <div class='panel3-3'></div>
                </div>
            </div>
        );
    };
};

export default ScheduleOverviewSection;
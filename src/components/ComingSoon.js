import React, { Component } from 'react';

class ComingSoon extends Component {
    render() {
        return (
            <div class='column'>
                <div class='coming-soon-container'>
                    <div class='coming-soon-header-container'>
                        <h1 class='coming-soon-header'>Coming Soon!</h1>
                    </div>
                    <div class='coming-soon-content'>
                        <div class='row'><h1 class='coming-soon-content-title'>Sci-Week 2021</h1></div>
                        <div class='row'><h2 class='coming-soon-date'>Launching: January 18, 2021</h2></div>
                        <div class='row'><h3 class='coming-soon-detail'>Days of Activities, Registration, and more.</h3></div>
                    </div>
                </div>
            </div>
        );
    };
};

export default ComingSoon;
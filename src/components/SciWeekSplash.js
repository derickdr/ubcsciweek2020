import React, { Component } from 'react';

class SciWeekSplash extends Component {
    render() {
        return (
            <div class='splash-container'>
                <div class='splash-column'>
                    <div class='sci-week-header-container'>
                        <h1 class='sci-week-header'>Super Sci Week 2021</h1>
                    </div>
                    <div class='sus-subheader-container'>
                        <div class='row'>
                            <h2 class='sus-name'>Science Undergraduate Society</h2>
                        </div>
                    </div>
                    <div class='panel-row'>
                        <div class='panel1'></div>
                    </div>
                    <div class='action-row'>
                        <div class='action-column'>
                           <div class='action-button-row'>
                                <div class='action-button'>
                                    <h1 class='action-button-text'>Events</h1>
                                </div>
                           </div>
                            <div class='panel-row'>
                                <div class='panel2'></div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default SciWeekSplash;
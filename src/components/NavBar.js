import React, { Component } from 'react';

class NavBar extends Component{
    render() {
        return (
            <div class='navbar-container'>
                <div class='logo-container'>
                    logo
                </div>
                <div class='nav-option-row'>
                    <div class='button1'>
                        <h2>home</h2>
                    </div>
                    <div class='button2'>
                        <h2>events</h2>
                    </div>
                    <div class='button3'>
                        <h2>about</h2>
                    </div>
                    <div class='button4'>
                        <h2>contact</h2>
                    </div>
                    <div class='button5'>
                        <h2>register</h2>
                    </div>
                </div>
            </div>
        );
    };
};

export default NavBar;
import React, { Component } from 'react';
import Logo from '../images/SUSLogo.png';

class NavBar extends Component{
    render() {
        return (
            <div class='navbar-container'>
                <div class='logo-container'>
                    <img src={Logo} alt='sus-logo' class='nav-logo'></img>
                </div>
                <div class='nav-option-row'>
                    <div class='nav-button'>
                        <h2>home</h2>
                    </div>
                    <div class='nav-button'>
                        <h2>events</h2>
                    </div>
                    <div class='nav-button'>
                        <h2>about</h2>
                    </div>
                    <div class='nav-button'>
                        <h2>contact</h2>
                    </div>
                    <div class='nav-button'>
                        <h2>register</h2>
                    </div>
                </div>
            </div>
        );
    };
};

export default NavBar;
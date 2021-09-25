import React from 'react';
import './Header.css';

const Header = () => {
    return (
      
        <div>
            <div className="header__main">
                <div className="header__logo">
                    <h2>Mosque Find Riser</h2>
                </div>
                <div className="header__menu">
                    <nav>
                        <a href="/fund">Fund Collect</a>
                        <a href="/members">Members</a>
                        <a href="/contact">Contact</a>
                    </nav>
                </div>
            </div>

            <div className="fund__text">
                <h1>Total Fund Waste In Mosque</h1>
                <h2>Total Fund : 5000000 $</h2>
                <h3>Courtesy : Olama Songothon Ltd.</h3>
            </div>
           

            </div>
      
    );
};

export default Header;
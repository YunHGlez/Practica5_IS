import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Header.css';

import Logo from '../assets/images/logo.jpg';


const Header = (props) => {
    return (
        <header className="header-container">
            <Link to="/">
                <img src={Logo} alt='Logo Epic Clash Hub'></img>
            </Link>
            {
                props.isThereButton && 
                <Link to="/AccesoYRegistro">
                    <button className="button-header">Acceder</button>
                </Link>
            }
        </header>
    );
};

export default Header;

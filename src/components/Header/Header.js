import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="bg-secondary">
            <div className="d-flex row">
                <h3 className="col-md-2 mx-2 my-2 text-light">LearnLanguage</h3>
                <ul className="d-flex justify-content-end col-md-8 text-light my-2 ">
                    <li className="item">
                        <Link className="items" to="/home">HOME</Link>
                    </li>
                    <li className="item">
                        <Link className="items" to="/about">ABOUT US</Link>
                    </li>
                    <li className="item">
                        <Link className="items" to="/services">OUR SERVICES</Link>
                    </li>
                    <li className="item">
                        <Link className="items" to="/contact">CONTACT US</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
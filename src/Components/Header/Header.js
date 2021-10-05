import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const Book = <FontAwesomeIcon icon={faBook} />
    const Singin = <FontAwesomeIcon icon={faArrowAltCircleRight} />
    return (
        <header className="herder-main sticky-top">
            <div className="header-bg">
                <div className="container d-flex justify-content-between align-items-center">
                    <h1 className="fw-bolder text-dark">{Book}EduLab</h1>
                    <nav className="mx-3">
                        <NavLink className="" to="/home"><button className="navLink p-3">Home</button></NavLink>
                        <NavLink className="" to="/success"><button className="navLink p-3">Success</button></NavLink>
                        <NavLink className="" to="/about"><button className="navLink p-3">About</button></NavLink>
                        <NavLink className="" to="/contact"><button className="navLink p-3">Contact</button></NavLink>
                    </nav>
                    <div>
                        <form className="d-flex">
                            <button className="navLink p-3">{Singin}Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
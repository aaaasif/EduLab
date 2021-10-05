import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const Book = <FontAwesomeIcon icon={faBook} />
    const Singin = <FontAwesomeIcon icon={faArrowAltCircleRight} />
    return (
        <header className="herder-main fixed-top">
            <div className="header-bg">
                <div className="container d-flex justify-content-between align-items-center">
                    <h1 className="fw-bolder text-dark">{Book}EduLab</h1>
                    <div className="navbar m-2">
                    <NavLink  to="/home"><button className="navLink p-1">Home</button></NavLink>
                    <NavLink  to="/courses"><button className="navLink p-1">Courses</button></NavLink>
                    <NavLink  to="/success"><button className="navLink p-1">Success</button></NavLink>
                    <NavLink  to="/about"><button className="navLink p-1">About</button></NavLink>
                    <NavLink  to="/contact"><button className="navLink p-1">Contact</button></NavLink>
                    </div>
                    <div>
                        <form className="d-flex">
                            <button className="navLink p-1">{Singin}Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
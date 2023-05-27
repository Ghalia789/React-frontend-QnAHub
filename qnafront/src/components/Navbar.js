import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = ({ onAskQuestionClick, onSignUpClick, onSignInClick, onProfileClick, onLogoutClick, isAuthenticated }) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };

    const handleAskQuestion = () => {
        onAskQuestionClick(); // Call the onAskQuestionClick prop
    };

    const handleSignUpClick = () => {
        onSignUpClick();
    };

    const handleSignInClick = () => {
        onSignInClick();
    };

    const handleProfileClick = () => {
        onProfileClick();
    };

    const handleLogoutClick = () => {
        onLogoutClick();
    };

    const handleLogout = () => {
        // handle logout logic
    };

    const navbarStyle = {
        backgroundColor: "midnightblue",
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={navbarStyle}>
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Q & A Hub
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!collapsed ? true : false} aria-label="Toggle navigation" onClick={toggleNavbar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${collapsed ? "justify-content-end" : "justify-content-between"}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/questions" className="nav-link">
                                Questions
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ask" className="btn btn-primary mx-2">
                                Ask a question
                            </Link>
                        </li>
                        <li className="nav-item">
                            {isAuthenticated ? (
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded={!collapsed ? true : false}>
                                        Profile
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="userDropdown">
                                        <li onClick={handleProfileClick}>
                                            <Link to="#" className="dropdown-item">
                                                View Profile
                                            </Link>
                                        </li>
                                        <li onClick={handleLogout}>
                                            <Link to="/logout" className="dropdown-item">
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" id="authDropdown" data-bs-toggle="dropdown" aria-expanded={!collapsed ? true : false}>
                                        Sign In / Sign Up
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="authDropdown">
                                        <li>
                                            <Link to="/signin" className="dropdown-item">
                                                Sign In
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/signup" className="dropdown-item">
                                                Sign Up
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

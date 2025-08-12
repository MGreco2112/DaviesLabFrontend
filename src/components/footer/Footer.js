import React from "react";
import "./Footer.css";
import Logo from "./dodat-logo.png";

const Footer = () => {
    const populateFooter = () => {
        return (
            <footer id="PageFooter">
                <div className="container">
                    <div className="row">
                        <div
                            className="d-flex align-items-center justify-content-start mb-3"
                        >
                            <span className="ImageSpan">
                                <img
                                    id="LogoImage"
                                    src={Logo}
                                    alt="DODAT Logo"
                                />
                            </span>
                        </div>
                        <div className="col-md-4">
                            <p
                                style={{"color": "white"}}
                            >
                                Davies Lab Oceanograpic Data Analysis Tools (DODATlander) - Oceanographic I/O and Visualization Platform for Bathic Landers and their Sensor Data.
                            </p>
                            <div className="d-flex gap-3">
                                <a
                                    className="test-light" href="https://github.com/MGreco2112/DaviesLabFrontend"
                                >
                                    <i className="fab fa-github fa-lg">
                                        
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4"/>
                    <div className="align-items-center mt-3 row">
                        <div className="col-md-6">
                            <p
                                className="mb-0"
                                style={{"color": "white"}}
                            >
                                &#169; 2025 DODAT. All rights reserved.
                            </p>
                                                        <p
                                className="mb-0"
                                style={{"color": "white"}}
                            >
                                Developed by Matthew Greco for DODAT.
                            </p>
                        </div>
                        <div className="text-md-end col-md-6">
                            <p
                                className="mb-0" style={{"color": "white"}}
                            >
                                Built with <i className="fas fa-heart text-danger"/> for oceanography.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );   
    }

    return (
        populateFooter()
    );
}

export default Footer;
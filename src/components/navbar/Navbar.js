import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";

const Navbar = () => {

    return (
        <Fragment>
        <div style={{
            backgroundColor: '#FFA500',
            position: "fixed",
            width: "100%",
            zIndex: 9999,
            top: 0,
            left: 0,
            height: "75px",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",

        }}>
            <NavLink
                to="/"
                style={{
                    textDecoration: "none",
                    color: "#010101"
                }}
            >
                <h1 style={{
                    fontFamily: 'sans-serif',
                    fontWeight: "bold",
                    fontSize: "2.5em",
                    margin: "0 20px"
                }}>Davies Lab TSDB</h1>
            </NavLink>
            <div style={{
                margin: "0 20px",
                flexDirection: "row",
                background: "transparent",
                userSelect: "none",
                alignItems: "center",
            }}>
                <NavButton to="/" label = "Home"/>
                <NavButton to="/landers" label = "Landers"/>
                <NavButton to="/dashboard" label = "Dashboard"/>
                <NavButton to="/uploads" label="Upload Files"/>
                <NavButton to="/forDevs" label="API Docs"/>
            </div>
        </div>
        <div style={{height: "75px"}}/>
        </Fragment>
    )
}

export default Navbar;
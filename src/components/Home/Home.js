import React from "react";
import Container from "../common/Container";
import "./Home.css";
import Logo from "./Davies Lab Logo.jpg";

const Home = () => {

    const formatPage = () => {
        return (
            <Container id="HomeContainer">
                <h1>Welcome to the Davies Lab</h1>

                <p>Navigate to Landers to view data</p>
                <img
                    id="logo"
                    src={Logo}
                />
            </Container>
        )
    }

    return formatPage();
}

export default Home;
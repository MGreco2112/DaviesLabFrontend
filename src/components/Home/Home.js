import React from "react";
import Container from "../common/Container";
import "./Home.css";
import Splash from "../common/Splash";

const Home = () => {

    const formatPage = () => {
        return (
            <Container id="HomeContainer">
                
                <h1>Welcome to the Davies Lab</h1>

                <p>Navigate to Landers to view data</p>
                <Splash id="LanderSplash"/>
            </Container>
        )
    }

    return formatPage();
}

export default Home;
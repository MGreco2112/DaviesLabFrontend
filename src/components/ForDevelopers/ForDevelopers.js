import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Container from "../common/Container";
import "./ForDevelopers.css";
import DevelopersMD from "./DevelopersInfo.md";
import Splash from "../common/Splash";

// Display information about endpoints in Backend for returning JSON data

const ForDevelopers = () => {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(DevelopersMD)
        .then((response) => response.text())
        .then((text) => setMarkdown(text));
    }, []);

    return(
        <Container className="MarkdownContainer">
            <ReactMarkdown children={markdown}/>
            <Splash id="LanderSplash"/>
        </Container>
    );
}

export default ForDevelopers;
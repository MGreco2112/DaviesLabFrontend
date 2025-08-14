import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Container from "../common/Container";
import "./ForDevelopers.css";
import DevelopersMD from "./DevelopersInfo.md";
import Splash from "../common/Splash";

// Display information about endpoints in Backend for returning JSON data

const ForDevelopers = () => {
    const [pageState, setPageState] = useState({
        markdown: "",
        loading: true
    });

    useEffect(() => {

        const fetchMarkdown = () => {
            fetch(DevelopersMD)
            .then((response) => response.text())
            .then((text) => setPageState({
                loading: false,
                markdown: text
            }));
        }

        setPageState({
            ...pageState,
            loading: true
        });

        fetchMarkdown();
    }, []);

    return(
        <Container className="MarkdownContainer">
            {
                pageState.loading
                ?
                <Container>
                    <h2>Loading...</h2>
                </Container>
                :
                <ReactMarkdown children={pageState.markdown}/>
            }
            <Splash id="LanderSplash"/>
        </Container>
    );
}

export default ForDevelopers;
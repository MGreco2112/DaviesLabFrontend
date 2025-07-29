import React, {useEffect} from "react";
import {apiHostURL} from "../../config";
import Container from "../common/Container";
import "./Home.css";
import Splash from "../common/Splash";

const Home = () => {

    useEffect(() => {

        const _populateCache = async () => {
            const urls = [
                `${apiHostURL}/api/processed/ctd/headers`,
                `${apiHostURL}/api/processed/do/headers`,
                `${apiHostURL}/api/processed/flntu/headers`,
                `${apiHostURL}/api/processed/albex_ctd/headers`,
                `${apiHostURL}/api/processed/adcp/headers`
            ];

            await caches.open("site-cache").then(async (cache) => {
                await cache
                    .addAll(urls)
                    .then(() => console.log("Data added to cache"))
                    .catch((error) => console.error("Error adding data to cache:", error))
            });
        }

        const _retrieveCache = async () => {
            await caches.open("site-cache").then(async (cache) => {
                await cache.match(`${apiHostURL}/api/processed/ctd/headers`).then(async function (response) {
                    if (response) {
                        const data = await response.json();
                        console.log(data);
                    } else {
                        console.log("Resource Not Found");
                    }
                });
            });
        }

        

        _populateCache();
        // _retrieveCache();
    }, []);

    const formatPage = () => {
        return (
            <Container id="HomeContainer">
                
                <h1>Welcome to the Davies Lab<br/>Lander Timeseries Database</h1>

                <p>Navigate to Landers to view data</p>
                <Splash id="LanderSplash"/>
            </Container>
        )
    }

    return formatPage();
}

export default Home;
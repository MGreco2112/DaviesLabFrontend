import React, {useEffect} from "react";
import {urls} from "../../config";
import Container from "../common/Container";
import "./Home.css";
import Splash from "../common/Splash";

const Home = () => {

    // useEffect(() => {

    // const _validateCache = async () => {


    //             const cacheName = "site-cache";
    //             const cache = await caches.open(cacheName);

    //             for (let i = 0; i < urls.length; i++) {
    //                 const cachedResponse = await cache.match(urls[i]);

    //                 if (cachedResponse) {
    //                     const data = await cachedResponse.json();

    //                     const today = new Date();


    //                     const [thisMonth, thisDay, thisYear] = [
    //                         today.getMonth(),
    //                         today.getDate(),
    //                         today.getFullYear()
    //                     ]
    //                     const cacheDate = new Date(data.cacheDate);
    //                     const [cacheMonth, cacheDay, cacheYear] = [
    //                         cacheDate.getMonth(),
    //                         cacheDate.getDate(),
    //                         cacheDate.getFullYear()
    //                     ];
                        
    //                     if (thisDay > cacheDay || thisMonth > cacheMonth || thisYear > cacheYear) {
    //                         _populateCache(urls);
    //                         return;
    //                     }
    //                     return;
    //                 }
    //             }
    //             _populateCache(urls);
    //         }
    //         _checkCache();
    // }, []);

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
import { useEffect, useState } from "react";
import {apiHostURL} from "../../config.js";
import { useNavigate } from "react-router-dom";
import Lander from "../landers/Lander.js";
import axios from "axios";
import Container from "../common/Container";
import "./Home.css";
import Splash from "../common/Splash";

const Home = () => {

    const [pageState, setPageState] = useState({
        loading: true,
        latestLanders: []
    });

    const navigate = useNavigate();

    useEffect(() => {
        const _auditCache = async () => {

            const cacheName = "site-cache"; //name of cache
            const cache = await caches.open(cacheName); //set cache variable
            const cacheKeys = await cache.keys(); //generate list of all keys in browser session cache

            cacheKeys.forEach(async (key) => { //iterate through each key
                const cachedResponse = await cache.match(key); //set var to response of cache via key
                
                if (cachedResponse) { //if cache exists via that key
                    const data = await cachedResponse.json(); //parse cache to json for interaction
                    
                    const today = new Date(); //generate today's date
                    
                    const [thisMonth, thisDay, thisYear] = [ //create new vars for month, day, year from today's date
                        today.getMonth(),
                        today.getDate(),
                        today.getFullYear()
                    ];

                    const cacheDate = new Date(data.cacheDate); //parse cache date from json
                    
                    const [cacheMonth, cacheDay, cacheYear] = [ //create vars for cached date
                        cacheDate.getMonth(),
                        cacheDate.getDate(),
                        cacheDate.getFullYear()
                    ];

                    if ((thisDay > cacheDay && thisMonth >= cacheMonth) || thisYear > cacheYear) { //compare today to cached date to determine if it's old
                        cache.delete(key); //remove from cache
                    }
                } else { //if no valid cache element for key
                    cache.delete(key); //delete from cache
                }
            });
        }

        const _populateLatestLanders = async () => {

            try {
                const res = await axios.get(`${apiHostURL}/api/landers/latest_uploads`);    

                setPageState({
                    ...pageState,
                    loading: false,
                    latestLanders: res.data.landers
                });

                _auditCache();
                
            } catch (err) {
                console.error(err.message ? err.message : err.response);
            }
        }

        if (pageState.loading) {
            _populateLatestLanders();
        }
    }, []);

    const onLanderClick = (id) => {
        navigate(`/landers/${id}`);
    }

    const createLanders = () => {
        
        return pageState.latestLanders.map(land => {
            return <Lander
                        className="HomeLanderCard"
                        lander={land}
                        key={land.asdblanderID}
                        onSelect={onLanderClick}
                    />
        });
    }

    const formatPage = () => {
        return (
            <Container id="HomeContainer">
                
                <h1>Welcome to the Davies Lab<br/>Lander Timeseries Database</h1>

                {
                    pageState.loading
                    ?
                    <Container/>
                    :
                    <Container className="LandersContainer" id="HomeWrapper">
                        <h2>Latest Deployed Landers</h2>
                        <Container className="LandersContainer" id="HomeLanders">
                            {createLanders()}
                        </Container>
                    </Container>
                }
                <Splash id="LanderSplash"/>
            </Container>
        );
    }

    return formatPage();
}

export default Home;
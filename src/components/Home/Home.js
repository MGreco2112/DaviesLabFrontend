import { useEffect, useState } from "react";
import {apiHostURL} from "../../config.js";
import { useNavigate } from "react-router-dom";
import Lander from "../landers/Lander.js";
import axios from "axios";
import Container from "../common/Container";
import "./Home.css";
import Splash from "../common/Splash";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

    const [pageState, setPageState] = useState({
        loading: true,
        latestLanders: []
    });

    const navigate = useNavigate();

    useEffect(() => {
        const _populateLatestLanders = async () => {
            try {
                const res = await axios.get(`${apiHostURL}/api/landers/latest_uploads`);                

                setPageState({
                    ...pageState,
                    loading: false,
                    latestLanders: res.data.landers
                });
                
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
            return <Lander className="HomeLanderCard" lander={land} key={land.asdblanderID} onSelect={onLanderClick}/>
        });
    }

    const formatPage = () => {
        return (
            <Container id="HomeContainer">
                
                <h1>Welcome to the Davies Lab<br/>Lander Timeseries Database</h1>

                {
                    pageState.loading
                    ?
                    null
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
        )
    }

    return formatPage();
}

export default Home;
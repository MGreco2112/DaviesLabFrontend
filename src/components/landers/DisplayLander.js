import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "../common/Container";
import Button from "../common/Button";
import "./Landers.css";
import { useParams } from "react-router-dom";
import { apiHostURL } from "../../config";
import { useNavigate } from "react-router-dom";

const DisplayLander = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [lander, setLander] = useState({
        asdblanderID: params.id
    });
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const _fetchLander = async () => {
            try {
                const res = await axios.get(`${apiHostURL}/api/landers/${lander.asdblanderID}`);

                setLander(res.data);
                setLoading(false);
                console.table(res.data);
            } catch (err) {
                console.error(err.message ? err.message : err.response);
            }
        }
    
        setLoading(true);
        _fetchLander();
    }, [lander.asdblanderID]);

    const ctdNav = () => {
        navigate(`/landers/data/ctd/${lander.ctdheads[0].headID}`);
    }

    const doNav = () => {
        navigate(`/landers/data/do/${lander.doheads[0].headID}`);
    }

    const flntuNav = () => {
        navigate(`/landers/data/flntu/${lander.flntuheads[0].headID}`);
    }

    const formatPage = () => {
        return (
            <Container className="LandersContainer">
                <p>Lander ID: {lander.asdblanderID}</p>
                {
                    lander.ctdheads.length !== 0
                    ?
                    <p>CTD Header ID: {lander.ctdheads[0].headID}</p>
                    :
                    null
                }
                {
                    lander.doheads.length !== 0
                    ?
                    <p>DO Header ID: {lander.doheads[0].headID}</p>
                    :
                    null
                }
                {
                    lander.flntuheads.length !== 0
                    ?
                    <p>FLNTU Header ID: {lander.flntuheads[0].headID}</p>
                    :
                    null
                }
                <div id="ButtonDiv">
                    {
                        lander.ctdheads.length !== 0
                        ?
                        <Button 
                            id="LanderButton"
                            onClick={ctdNav}
                        >CTD Data</Button>
                        :
                        null
                    }
                    {
                        lander.doheads.length !== 0
                        ?
                        <Button 
                            id="LanderButton"
                            onClick={doNav}
                        >DO Data</Button>
                        :
                        null
                    }
                    {
                        lander.flntuheads.length !== 0
                        ?
                        <Button 
                            id="LanderButton"
                            onClick={flntuNav}
                        >FLNTU Data</Button>
                        :
                        null
                    }
                </div>
            </Container>
        );
    }




    return(
        <Container className="LandersContainer">
            {
                loading ?
                    <p>FETCHING LANDER...</p>
                    :
                    formatPage()
            }
        </Container>
    );
}

export default DisplayLander;
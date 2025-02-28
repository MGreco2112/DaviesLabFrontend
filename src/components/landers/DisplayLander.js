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

                setLoading(false);
                setLander(res.data);
                console.table(res.data);
            } catch (err) {
                console.error(err.message ? err.message : err.response);
            }
        }
    
        setLoading(true);
        _fetchLander();
    }, [lander.asdblanderID]);

    const ctdNav = () => {
        navigate(`/ctdhead/${lander.ctdheads[0].headID}`);
    }

    const doNav = () => {
        navigate(`/dohead/${lander.doheads[0].headID}`);
    }

    const flntuNav = () => {
        navigate(`/flntuhead/${lander.flntuheads[0].headID}`);
    }




    return(
        <Container className="LandersContainer">
            {
                loading ?
                    <p>FETCHING LANDER...</p>
                    :
                    <Container className="LandersContainer">
                        <p>Lander ID: {lander.asdblanderID}</p>
                        <p>CTD Header ID: {lander.ctdheads[0].headID}</p>
                        <p>DO Header ID: {lander.doheads[0].headID}</p>
                        <p>FLNTU Header ID: {lander.flntuheads[0].headID}</p>
                        <div id="ButtonDiv">
                            {
                                lander.ctdheads.length !== 0
                                ?
                                <Button 
                                    id="LanderButton"
                                    onClick={ctdNav}
                                >CTD Info</Button>
                                :
                                null
                            }
                                                        {
                                lander.ctdheads.length !== 0
                                ?
                                <Button 
                                    id="LanderButton"
                                    onClick={doNav}
                                >DO Info</Button>
                                :
                                null
                            }
                                                        {
                                lander.ctdheads.length !== 0
                                ?
                                <Button 
                                    id="LanderButton"
                                    onClick={flntuNav}
                                >FLNTU Info</Button>
                                :
                                null
                            }
                        </div>
                    </Container>
            }
        </Container>
    );
}

export default DisplayLander;
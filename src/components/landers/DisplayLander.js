import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "../common/Container";
import BorderCard from "../common/BorderCard";
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
        navigate(`/landers/data/ctd/${lander.ctdhead.headID}`);
    }

    const doNav = () => {
        navigate(`/landers/data/do/${lander.dohead.headID}`);
    }

    const flntuNav = () => {
        navigate(`/landers/data/flntu/${lander.flntuhead.headID}`);
    }

    const albexNav = () => {
        navigate(`/landers/data/albex_ctd/${lander.albexCTDHead.headID}`);
    }

    const adcpNav = () => {
        navigate(`/landers/data/adcp/${lander.adcphead.headID}`)
    }

    const formatPage = () => {
        return (
            <Container className="LandersContainer">
                <strong>Lander ID: {lander.asdblanderID}</strong>
                {
                    lander.ctdhead
                    ?
                    <p>CTD Header ID: {lander.ctdhead.headID}</p>
                    :
                    null
                }
                {
                    lander.dohead
                    ?
                    <p>DO Header ID: {lander.dohead.headID}</p>
                    :
                    null
                }
                {
                    lander.flntuhead
                    ?
                    <p>FLNTU Header ID: {lander.flntuhead.headID}</p>
                    :
                    null
                }
                {
                    lander.albexCTDHead
                    ?
                    <p>ALBEX CTD Header ID: {lander.albexCTDHead.headID}</p>
                    :
                    null
                }
                {
                    lander.adcphead
                    ?
                    <p>ADCP Header ID: {lander.adcphead.headID}</p>
                    :
                    null
                }
                <div id="ButtonDiv">
                    {
                        lander.ctdhead
                        ?
                        <Button 
                            id="LanderButton"
                            onClick={ctdNav}
                        >CTD Data</Button>
                        :
                        null
                    }
                    {
                        lander.dohead
                        ?
                        <Button 
                            id="LanderButton"
                            onClick={doNav}
                        >DO Data</Button>
                        :
                        null
                    }
                    {
                        lander.flntuhead
                        ?
                        <Button 
                            id="LanderButton"
                            onClick={flntuNav}
                        >FLNTU Data</Button>
                        :
                        null
                    }
                    {
                        lander.albexCTDHead
                        ?
                        <Button
                            id="LanderButton"
                            onClick={albexNav}
                        >ALBEX CTD Data</Button>
                        :
                        null
                    }
                    {
                        lander.adcphead
                        ?
                        <Button
                            id="LanderButton"
                            onClick={adcpNav}
                        >ADCP Data</Button>
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
                    <BorderCard>
                        {formatPage()}
                    </BorderCard>
            }
        </Container>
    );
}

export default DisplayLander;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "../common/Container";
import BorderCard from "../common/BorderCard";
import Button from "react-bootstrap/Button";
import "./Landers.css";
import { useParams } from "react-router-dom";
import { apiHostURL } from "../../config";
import { useNavigate } from "react-router-dom";
import Splash from "../common/Splash";

const DisplayLander = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [pageState, setPageState] = useState({
        lander: {asdblanderID: params.id},
        loading: true
    });
    
    useEffect(() => {
        const _fetchLander = async () => {
            try {
                const res = await axios.get(`${apiHostURL}/api/landers/${pageState.lander.asdblanderID}`);

                setPageState({
                    ...pageState,
                    lander: res.data,
                    loading: false
                });
            } catch (err) {
                console.error(err.message ? err.message : err.response);
            }
        }
    
        setPageState({
            ...pageState,
            loading: true
        });
        _fetchLander();
    }, [pageState.lander.asdblanderID]);

    const landersNav = () => {
        navigate(`/landers`);
    }

    const ctdNav = () => {
        navigate(`/landers/data/ctd/${pageState.lander.ctdhead.headID}`);
    }

    const doNav = () => {
        navigate(`/landers/data/do/${pageState.lander.dohead.headID}`);
    }

    const flntuNav = () => {
        navigate(`/landers/data/flntu/${pageState.lander.flntuhead.headID}`);
    }

    const albexNav = () => {
        navigate(`/landers/data/albex_ctd/${pageState.lander.albexCTDHead.headID}`);
    }

    const adcpNav = () => {
        navigate(`/landers/data/adcp/${pageState.lander.adcphead.headID}`);
    }

    const formatPage = () => {
        return (
            <Container className="LandersContainer">
                <strong>Lander ID: {pageState.lander.asdblanderID}</strong>
                <div id="dateDiv">
                    {
                        pageState.lander.deploymentDate
                        ?
                        <p>Deployment Date: {pageState.lander.deploymentDate}</p>
                        :
                        null
                    }
                    {
                        pageState.lander.recoveryDate
                        ?
                        <p>Recovery Date: {pageState.lander.recoveryDate}</p>
                        :
                        null
                    }
                </div>
                {
                    pageState.lander.ctdhead
                    ?
                    <p>CTD Header ID: {pageState.lander.ctdhead.headID}</p>
                    :
                    null
                }
                {
                    pageState.lander.dohead
                    ?
                    <p>DO Header ID: {pageState.lander.dohead.headID}</p>
                    :
                    null
                }
                {
                    pageState.lander.flntuhead
                    ?
                    <p>FLNTU Header ID: {pageState.lander.flntuhead.headID}</p>
                    :
                    null
                }
                {
                    pageState.lander.albexCTDHead
                    ?
                    <p>ALBEX CTD Header ID: {pageState.lander.albexCTDHead.headID}</p>
                    :
                    null
                }
                {
                    pageState.lander.adcphead
                    ?
                    <p>ADCP Header ID: {pageState.lander.adcphead.headID}</p>
                    :
                    null
                }
                <div id="ButtonDiv">
                    {
                        pageState.lander.ctdhead
                        ?
                        <Button 
                            id="LanderButton"
                            onClick={ctdNav}
                        >CTD Data</Button>
                        :
                        null
                    }
                    {
                        pageState.lander.dohead
                        ?
                        <Button 
                            id="LanderButton"
                            onClick={doNav}
                        >DO Data</Button>
                        :
                        null
                    }
                    {
                        pageState.lander.flntuhead
                        ?
                        <Button 
                            id="LanderButton"
                            onClick={flntuNav}
                        >FLNTU Data</Button>
                        :
                        null
                    }
                    {
                        pageState.lander.albexCTDHead
                        ?
                        <Button
                            id="LanderButton"
                            onClick={albexNav}
                        >ALBEX CTD Data</Button>
                        :
                        null
                    }
                    {
                        pageState.lander.adcphead
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
                pageState.loading ?
                    <p>FETCHING LANDER...</p>
                    :
                    <Container className="LandersContainer">
                        <Button
                            onClick={landersNav}
                            id="LanderButton"
                        >Return to Landers</Button>
                        <BorderCard className="LanderCard">
                            {formatPage()}
                        </BorderCard>
                    </Container>
            }
            <Splash id="LanderSplash"/>
        </Container>
    );
}

export default DisplayLander;
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

    // TODO: Create Data Page settings for Sensors below this comment
    const batteryNav = () => {
        navigate(`landers/data/battery/${pageState.lander.batteryhead.headID}`);
    }

    const beaconNav = () => {
        navigate(`landers/data/beacon/${pageState.lander.beaconhead.headID}`);
    }

    const cameraNav = () => {
        navigate(`landers/data/camera/${pageState.lander.camerahead.headID}`);
    }

    const sedimentTrapNav = () => {
        navigate(`landers/data/sediment_trap/${pageState.lander.sedimentTrapHead.headID}`);
    }

    const formatPage = () => {
        return (
            <Container className="LandersContainer">
                <strong>Lander ID: {pageState.lander.asdblanderID}</strong>
                <div id="dateDiv">
                    {
                        pageState.lander.deploymentDate
                        ?
                        <p>Deployment Date: {new Date(pageState.lander.deploymentDate).toDateString()}</p>
                        :
                        null
                    }
                    {
                        pageState.lander.recoveryDate
                        ?
                        <p>Recovery Date: {new Date(pageState.lander.recoveryDate).toDateString()}</p>
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
                {
                    pageState.lander.batteryhead
                    ?
                    <p>Battery Header ID: {pageState.lander.batteryhead.headID}</p>
                    :
                    null
                }
                {
                    pageState.lander.beaconhead
                    ?
                    <p>Beacon Header ID: {pageState.lander.beaconhead.headID}</p>
                    :
                    null
                }
                {
                    pageState.lander.camerahead
                    ?
                    <p>Camera Header ID: {pageState.lander.camerahead.headID}</p>
                    :
                    null
                }
                {
                    pageState.lander.sedimentTrapHead
                    ?
                    <p>Sediment Trap Header ID: {pageState.lander.sedimentTrapHead.headID}</p>
                    :
                    null
                }
                <div id="ButtonDiv">
                    {
                        pageState.lander.ctdhead
                        ?
                        <Button 
                            className="LanderButton"
                            onClick={ctdNav}
                        >CTD Data</Button>
                        :
                        null
                    }
                    {
                        pageState.lander.dohead
                        ?
                        <Button 
                            className="LanderButton"
                            onClick={doNav}
                        >DO Data</Button>
                        :
                        null
                    }
                    {
                        pageState.lander.flntuhead
                        ?
                        <Button 
                            className="LanderButton"
                            onClick={flntuNav}
                        >FLNTU Data</Button>
                        :
                        null
                    }
                    {
                        pageState.lander.albexCTDHead
                        ?
                        <Button
                            className="LanderButton"
                            onClick={albexNav}
                        >ALBEX CTD Data</Button>
                        :
                        null
                    }
                    {
                        pageState.lander.adcphead
                        ?
                        <Button
                            className="LanderButton"
                            onClick={adcpNav}
                        >ADCP Data</Button>
                        :
                        null
                    }
                    {
                        pageState.lander.batteryhead
                        ?
                        <Button
                            className="LanderButton"
                            onClick={batteryNav}
                        >Battery Data</Button>
                        :
                        null
                    }
                    {
                        pageState.lander.beaconhead
                        ?
                        <Button
                            className="LanderButton"
                            onClick={beaconNav}
                        >Beacon Data</Button>
                        :
                        null
                    }
                    {
                        pageState.lander.camerahead
                        ?
                        <Button
                            className="LanderButton"
                            onClick={cameraNav}
                        >Camera Data</Button>
                        :
                        null
                    }
                    {
                        pageState.lander.sedimentTrapHead
                        ?
                        <Button
                            className="LanderButton"
                            onClick={sedimentTrapNav}
                        >Sediment Trap Data</Button>
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
                pageState.loading
                ?
                <Container>
                    <p>FETCHING LANDER...</p>
                </Container>
                :
                <Container className="LandersContainer">
                    <Button
                        onClick={landersNav}
                        id="LanderButton"
                    >Return to Landers</Button>
                    <BorderCard className="DisplayLanderCard">
                        {formatPage()}
                    </BorderCard>
                </Container>
            }
            <Splash id="LanderSplash"/>
        </Container>
    );
}

export default DisplayLander;
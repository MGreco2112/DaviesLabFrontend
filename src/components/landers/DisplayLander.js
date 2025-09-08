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
        lander: {
            asdblanderID: params.id
        },
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

    const dynamicButtonNav = (button) => {
        let navURL = `/landers/data/${button}/`
        let runNav = true;

        switch (button) {
            case "ctd": {
                navURL += `${pageState.lander.ctdhead.headID}`;
                break;
            }
            case "do": {
                navURL += `${pageState.lander.dohead.headID}`;
                break;
            }
            case "flntu": {
                navURL += `${pageState.lander.flntuhead.headID}`;
                break;
            }
            case "albex": {
                navURL += `${pageState.lander.albexCTDHead.headID}`;
                break;
            }
            case "adcp": {
                navURL += `${pageState.lander.adcphead.headID}`;
                break;
            }
            case "battery": {
                navURL += `${pageState.lander.batteryhead.headID}`;
                break;
            }
            case "beacon": {
                navURL += `${pageState.lander.beaconhead.headID}`;
                break;
            }
            case "camera": {
                navURL += `${pageState.lander.camerahead.headID}`;
                break;
            }
            case "sediment": {
                navURL += `${pageState.lander.sedimentTrapHead.headID}`;
                break;
            }
            default: {
                console.error("Invalid Sensor Navigation");
                runNav = false;
            }
        }

        if (runNav) {
            navigate(navURL);
        }
    }

    const formatPage = () => {
        return (
            <Container className="LandersContainer">
                <strong id="LanderID">Lander ID: {pageState.lander.asdblanderID}</strong>
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
                            id="ctd"
                            className="LanderButton"
                            onClick={() => {dynamicButtonNav("ctd")}}
                        >CTD Data</Button>
                        :
                        null
                    }
                    {
                        pageState.lander.dohead
                        ?
                        <Button
                            id="do"
                            className="LanderButton"
                            onClick={() => dynamicButtonNav("do")}
                        >DO Data</Button>
                        :
                        null
                    }
                    {
                        pageState.lander.flntuhead
                        ?
                        <Button
                            id="flntu"
                            className="LanderButton"
                            onClick={() => dynamicButtonNav("flntu")}
                        >FLNTU Data</Button>
                        :
                        null
                    }
                    {
                        pageState.lander.albexCTDHead
                        ?
                        <Button
                            id="albex_ctd"
                            className="LanderButton"
                            onClick={() => dynamicButtonNav("albex_ctd")}
                        >ALBEX CTD Data</Button>
                        :
                        null
                    }
                    {
                        pageState.lander.adcphead
                        ?
                        <Button
                            id="adcp"
                            className="LanderButton"
                            onClick={() => dynamicButtonNav("adcp")}
                        >ADCP Data</Button>
                        :
                        null
                    }
                    {
                        pageState.lander.batteryhead
                        ?
                        <Button
                            id="battery"
                            className="LanderButton"
                            onClick={() => dynamicButtonNav("battery")}
                        >Battery Data</Button>
                        :
                        null
                    }
                    {
                        pageState.lander.beaconhead
                        ?
                        <Button
                            id="beacon"
                            className="LanderButton"
                            onClick={() => dynamicButtonNav("beacon")}
                        >Beacon Data</Button>
                        :
                        null
                    }
                    {
                        pageState.lander.camerahead
                        ?
                        <Button
                            id="camera"
                            className="LanderButton"
                            onClick={() => dynamicButtonNav("camera")}
                        >Camera Data</Button>
                        :
                        null
                    }
                    {
                        pageState.lander.sedimentTrapHead
                        ?
                        <Button
                            id="sediment_trap"
                            className="LanderButton"
                            onClick={() => dynamicButtonNav("sediment_trap")}
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
                    <h1>FETCHING LANDER...</h1>
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
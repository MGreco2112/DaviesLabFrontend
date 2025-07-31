import React, { useState, useEffect } from "react";
import Container from "../common/Container";
import {apiHostURL} from "../../config";
import Button from "react-bootstrap/Button";
import "./Uploads.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HeaderDataForm from "./HeaderDataForm";
import Splash from "../common/Splash";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';

const Uploads = () => {
    const navigate = useNavigate();

    const [pageState, setPageState] = useState({
        state: {
            selectedFile: null,
            isUploading: false,
            landers: [],
            showDisplayForm: false
        },
        dateRange: {
            burstTime: "",
            burstCnt: "",
            startTime: "",
            endTime: ""
        },
        loading: true
    });

    useEffect(() => {
        const _getAllLanders = async () => {
            try {
                const res = await axios.get(`${apiHostURL}/api/landers/all`);

                setPageState({
                    ...pageState,
                    state: {
                        ...pageState.state,
                        landers: res.data
                    },
                    loading: false
                });
            } catch (err) {
                console.error(err.message ? err.message : err.response);
                document.getElementById("mainBodyContainer").innerText = "Error Retrieving Landers";
            }
        }

        setPageState({
            ...pageState,
            loading: true
        });
        _getAllLanders();
    }, []);

    const onFileChange = (event) => {
        setPageState({
            ...pageState,
            state: {
                ...pageState.state,
                selectedFile: event.target.files[0]
            }
        });
    }

    const onLanderClick = () => {
        navigate("/uploads/new_lander");
    }

    const _updateCache = async (sensorValue) => {
        await caches.open("site-cache").then(async (cache) => {
            await cache
                .add(`${apiHostURL}/api/cache/${sensorValue}/headers`)
                .then(() => console.log("Data added to cache"))
                .catch((error) => console.error("Error adding data to cache:", error))
        });
    } 

    const onFileUpload = async () => {
        const sensorValue = document.getElementById("sensor").value;
        let routeValue = document.getElementById("route").value;
        const landerValue = JSON.parse(document.getElementById("lander").value);
        const uploadButton = document.getElementById("uploadButton");
        
        if (pageState.state.selectedFile) {
        
            const timeProcessObject = {
                pageElement: document.getElementById("fileDataDiv"),
                sensorValue: sensorValue,
                landerValue: landerValue.asdblanderID
            }
    

            if (sensorValue !== "" && routeValue !== "" && landerValue !== "") {

                try {
                    const formData = new FormData();

                    let paramName = "";

                    if (routeValue === "header") {
                        paramName = "processedHead";
                    } else {
                        paramName = "processedFile";
                    }
                    

                    uploadButton.disabled = true;
                    var intervalID = null;
                    if (routeValue !== "header") {
                        updateMessage(timeProcessObject);
                        intervalID = setInterval(updateMessage, 5_000, timeProcessObject);
                    }
                    
                    formData.append(
                        paramName,
                        pageState.state.selectedFile,
                        pageState.state.selectedFile.name
                    );
                    
                    await axios.post(`${apiHostURL}/api/processed/${sensorValue}/upload_csv/${routeValue}/${landerValue.asdblanderID}`, formData);

                    if (intervalID) {
                        clearInterval(intervalID);
                    }
                    if (document.getElementById("uploadProgressBar")) {
                        document.getElementById("progressPercentage").innerText = "Upload Progress: 100%";
                        document.getElementById("uploadProgressBar").value = 1;
                    } else {
                        timeProcessObject.pageElement.innerText = "Upload Completed!";
                    }
                    
                } catch (err) {
                    console.error(err.message ? err.message : err.response);
                    alert((err.message ? err.message : err.response) + (err.response.data ? "\n" + err.response.data : ""));
                    if (intervalID) {
                        clearInterval(intervalID);
                    }
                }

                _updateCache(sensorValue);
                uploadButton.disabled = false;

            } else {
                alert("No Sensor or Upload Type Selected!");
            }

        } else {
            alert("No File Selected!");
        }
    }

    const updateMessage = async (timeProcessObject) => {

        try {

            if (!pageState.state.showDisplayForm) {
                const res = await axios.get(`${apiHostURL}/api/processed/${timeProcessObject.sensorValue}/data/count/${timeProcessObject.landerValue}`);
            
                // console.table(res.data);

                if (!document.getElementById("uploadProgressBar")) {

                    setPageState({
                        ...pageState,
                        state: {
                            ...pageState.state,
                            isUploading: true
                        }
                    });
                } else {
                    document.getElementById("progressPercentage").innerText = `Upload Progress: ${Math.trunc(res.data.percentage * 100)}%`;
                    document.getElementById("uploadProgressBar").value = res.data.percentage;
                }

                
            } else if (pageState.dateRange.burstCnt !== "" && pageState.dateRange.burstTime !== "" && pageState.dateRange.startTime !== "" && pageState.dateRange.endTime !== "") {
                if (!timeProcessObject.estimatedTotal) {
                    const getTotals = await axios.post(`${apiHostURL}/api/processed/${timeProcessObject.sensorValue}/data/count/headless`, pageState.dateRange);

                    timeProcessObject.estimatedTotal = getTotals.data.numberOfFiles;
                } else {
                    
                    if (!document.getElementById("uploadProgressBar")) {

                        setPageState({
                            ...pageState,
                            state: {
                                ...pageState.state,
                                isUploading: true
                            }
                        });
                    } else {
                        const res = await axios.get(`${apiHostURL}/api/processed/${timeProcessObject.sensorValue}/data/count/${timeProcessObject.landerValue}`);
            
                        // console.table(res.data);

                        document.getElementById("progressPercentage").innerText = `Upload Progress: ${Math.trunc((res.data.fileCount / timeProcessObject.estimatedTotal) * 100)}%`;
                        document.getElementById("uploadProgressBar").value = (res.data.fileCount / timeProcessObject.estimatedTotal);
                    }
                }
            } else {

                setPageState({
                    ...pageState,
                    state: {
                        ...pageState.state,
                        isUploading: true
                    }
                });
            }
            
        } catch (err) {
            console.error(err.response ? err.response : err.message);
        }
        
    }

    const onRouteChange = () => {
        const route = document.getElementById("route");
        const sensor = document.getElementById("sensor").value;
        const landerVal = document.getElementById("lander").value;

        if (landerVal === "") {
            return;
        }

        const selLander = JSON.parse(landerVal);        
        
        if (document.getElementById("headerDataForm")) {

            setPageState({
                ...pageState,
                state: {
                    ...pageState.state,
                    showDisplayForm: false,
                    isUploading: false
                }
            });
        } else {

            setPageState({
                ...pageState,
                state: {
                    ...pageState.state,
                    isUploading: false
                }
            });
        }

        if (selLander !== "" && sensor !== "" && route.value === "data") {
        
            setPageState({
                ...pageState,
                dateRange: {
                    burstTime: "",
                    burstCnt: "",
                    startTime: "",
                    endTime: ""
                }
            });

            switch (sensor) {
                case "ctd": {
                    if (!selLander.ctdhead) {
                        
                        setPageState({
                            ...pageState,
                            state: {
                                ...pageState.state,
                                showDisplayForm: true
                            }
                        });
                    } else {

                        setPageState({
                            ...pageState,
                            state: {
                                ...pageState.state,
                                showDisplayForm: false
                            }
                        });
                    }
                    break;
                }
                case "do": {
                    if (!selLander.dohead) {

                        setPageState({
                            ...pageState,
                            state: {
                                ...pageState.state,
                                showDisplayForm: true
                            }
                        });
                    } else {

                        setPageState({
                            ...pageState,
                            state: {
                                ...pageState.state,
                                showDisplayForm: false
                            }
                        });
                    }
                    break;
                }
                case "flntu": {
                    if (!selLander.flntuhead) {

                        setPageState({
                            ...pageState,
                            state: {
                                ...pageState.state,
                                showDisplayForm: true
                            }
                        });
                    } else {

                        setPageState({
                            ...pageState,
                            state: {
                                ...pageState.state,
                                showDisplayForm: false
                            }
                        });
                    }
                    break;
                }
                case "albex_ctd": {
                    if (!selLander.albexCTDHead) {

                        setPageState({
                            ...pageState,
                            state: {
                                ...pageState.state,
                                showDisplayForm: true
                            }
                        });
                    } else {

                        setPageState({
                            ...pageState,
                            state: {
                                ...pageState.state,
                                showDisplayForm: false
                            }
                        });
                    }
                    break;
                }
                case "adcp": {
                    if (!selLander.adcphead) {

                        setPageState({
                            ...pageState,
                            state: {
                                ...pageState.state,
                                showDisplayForm: true
                            }
                        });
                    } else {

                        setPageState({
                            ...pageState,
                            state: {
                                ...pageState.state,
                                showDisplayForm: false
                            }
                        });
                    }
                    break;
                }
                default: {
                    console.log("Invalid Selection");
                            
                }
                    
            }
            
        }
    }

    const fileData = () => {

        if (pageState.state.selectedFile) {
            if (pageState.state.isUploading) {
                return (
                    <div id="progressBarDiv">
                        <p id="progressPercentage">Upload Progress: 0%</p>
                        <progress id="uploadProgressBar" value={null}/>
                    </div>
                )
            } else {
                return (
                    <div id="fileDataDiv">
                        <h2>File Details:</h2>
                        <p>File Name: {pageState.state.selectedFile.name}</p>
    
                        <p>File Type: {pageState.state.selectedFile.type}</p>
                    </div>
                );
            }
        } else {
            return (
                <Container className="uploadsContainer">
                    <h3>Upload CSV Data from Lander Sensors</h3>
                    <h4>UPLOAD INSTRUCTIONS:</h4>
                    <p>1) Select Lander from Menu</p>
                    <p>2) Select desired sensor from Menu</p>
                    <p>3) Select upload file type contents (Header Only, Data Points Only, or Combined Header w/ Data Points)</p>
                    <p>   For Data without an uploaded Header, fill out the form to be provided a completion estimate during uploading</p>
                    <p>4) Click Submit and wait for message</p>
                    <p>If an Error occurs, check sensor and type of file and dropdown selections</p>
                </Container>
            );
        }
    }

    const formatPage = () => {

        return (
            <Container className="uploadsContainer">
                <h1>CSV Upload</h1>
                
                    <div id="LanderSelectDiv" className="FormDivs">
                        <InputGroup.Text>Select a Lander:</InputGroup.Text>
                        <Form.Select
                            label="Select a Lander:"
                            onChange={onRouteChange}
                            name="lander"
                            id="lander"
                        >
                            <option value=""></option>
                            {pageState.state.landers.map( option => { return <option value={JSON.stringify(option)} key={option.asdblanderID}>{option.asdblanderID}</option>})}
                        </Form.Select>
                    </div>

                    <Button
                        id="AddLanderButton"
                        className="Button"
                        variant="outline-secondary"
                        size="sm"
                        onClick={onLanderClick}
                    >Add Lander</Button>

                    <div id="SensorSelectDiv" className="FormDivs">
                        <InputGroup.Text>Select a Sensor:</InputGroup.Text>
                        <Form.Select
                            label="Select a Sensor"
                            onChange={onRouteChange}
                            name="sensor"
                            id="sensor"
                        >
                            <option value=""></option>
                            <option value="ctd">CTD</option>
                            <option value="do">DO</option>
                            <option value="flntu">FLNTU</option>
                            <option value="albex_ctd">ALBEX CTD</option>
                            <option value="adcp">ADCP</option>
                        </Form.Select>
                    </div>

                    <div id="RouteSelectDiv" className="FormDivs">
                        <InputGroup.Text>Select File Type:</InputGroup.Text>
                        <Form.Select
                            label="Select File Type:"
                            onChange={onRouteChange}
                            name="route"
                            id="route"
                        >
                            <option value=""></option>
                            <option value="header">Head</option>
                            <option value="data">Data</option>
                            <option value="combined">Combined</option>
                        </Form.Select>
                    </div>

                    <Form.Group controlId="formFile" className="mb-3">
                        <InputGroup.Text>Browse Lander Data</InputGroup.Text>
                        <Form.Control type="file" onChange={onFileChange}/>
                    </Form.Group>
                    <div id="headerDataDiv" className="FormDivs">
                    {   pageState.state.showDisplayForm
                        ?
                        <HeaderDataForm header={pageState.dateRange} state={pageState} updateRange={setPageState} id="headerDataForm" className="uploadsContainer"/>
                        :
                        null
                    }
                    </div>

                    <div id="UploadButtonDiv" className="FormDivs">
                        <Button
                            id="uploadButton"
                            className="Button"
                            onClick={onFileUpload}
                            size="lg"
                        >Upload!</Button>
                    </div>
                {fileData()}
                <Splash id="LanderSplash"/>
            </Container>
        );
    }

    return (
        <Container className="uploadsContainer" id="mainBodyContainer">
            {
                pageState.loading 
                ?
                <h1>loading...</h1> 
                :
                formatPage()
            }
        </Container>
    );
}

export default Uploads;
import React, { useState, useEffect } from "react";
import Container from "../common/Container";
import {apiHostURL} from "../../config";
import Button from "../common/Button";
import "./Uploads.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Uploads = () => {
    const navigate = useNavigate();

    const [state, setState] = useState({
        selectedFile: null
    });

    const [landers, setLanders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const _getAllLanders = async () => {
            try {
                const res = await axios.get(`${apiHostURL}/api/landers/all`);

                console.table(res.data);
                setLanders(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err.message ? err.message : err.response);
                document.getElementById("mainBodyContainer").innerText = "Error Retrieving Landers";
            }
        }

        setLoading(true);
        _getAllLanders();
    }, []);

    const onFileChange = (event) => {
        setState({
            selectedFile: event.target.files[0]
        });

    }

    const onLanderClick = () => {
        navigate("/uploads/new_lander");
    }

    const onFileUpload = async () => {
        const sensorValue = document.getElementById("sensor").value;
        let routeValue = document.getElementById("route").value;
        const landerValue = document.getElementById("lander").value;
        const uploadButton = document.getElementById("uploadButton");
        
        if (state.selectedFile) {
        
            const timeProcessObject = {
                pageElement: document.getElementById("fileDataDiv"),
                sensorValue: sensorValue,
                landerValue: landerValue
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
                    let intervalID = null;
                    if (routeValue !== "header") {
                        intervalID = setInterval(updateMessage, 1_000, timeProcessObject);
                    }
                    
                    formData.append(
                        paramName,
                        state.selectedFile,
                        state.selectedFile.name
                    );
                    
                    await axios.post(`${apiHostURL}/api/processed/${sensorValue}/upload_csv/${routeValue}/${landerValue}`, formData);

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
                }

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
            const res = await axios.get(`${apiHostURL}/api/processed/${timeProcessObject.sensorValue}/data/count/${timeProcessObject.landerValue}`);

            if (res.data.isPercentage) {
                if (!document.getElementById("uploadProgressBar")) {
                    const progressBar = document.createElement('progress');
                    progressBar.id = "uploadProgressBar";
                    progressBar.value = null;

                    const progressMessage = document.createElement("p");
                    progressMessage.id = "progressPercentage";
                    progressMessage.innerText = `Upload Progress: ${Math.round(res.data.percentage * 100)}%`

                    timeProcessObject.pageElement.innerHTML = "";
                    timeProcessObject.pageElement.appendChild(progressMessage);
                    timeProcessObject.pageElement.appendChild(progressBar);
                } else {
                    document.getElementById("progressPercentage").innerText = `Upload Progress: ${Math.round(res.data.percentage * 100)}%`;
                    document.getElementById("uploadProgressBar").value = res.data.percentage;
                }

                
            } else { //TODO: add elif for timeProcessObject to contain the header information for percentages between this and the else
                timeProcessObject.pageElement.innerText = `Files Uploaded: ${res.data.fileCount}`;
            }

            
        } catch (err) {
            console.error(err.response ? err.response : err.message);
        }
        
    }

    const fileData = () => {

        if (state.selectedFile) {
            return (
                <div id="fileDataDiv">
                    <h2>File Details:</h2>
                    <p>File Name: {state.selectedFile.name}</p>

                    <p>File Type: {state.selectedFile.type}</p>
                </div>
            );
        } else {
            return (
                <Container className="uploadsContainer">
                    <h3>Upload CSV Data from Lander Sensors</h3>
                    <h4>UPLOAD INSTRUCTIONS:</h4>
                    <p>1) Select Lander from Menu</p>
                    <p>2) Select desired sensor from Menu</p>
                    <p>3) Select upload file type contents (Header Only, Data Points Only, or Combined Header w/ Data Points)</p>
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
            <div>
                <label>Select a Lander:</label>
                <select name="lander" id="lander">
                    <option value=""></option>
                    {landers.map( option => { return <option value={option.asdblanderID} key={option.asdblanderID}>{option.asdblanderID}</option>})}
                </select>
            </div>
            <Button
                    onClick={onLanderClick}
                >Add Lander</Button>
            <div>
                <label htmlFor="sensor">Select a Sensor:</label>
                <select name="sensor" id="sensor">
                    <option value=""></option>
                    <option value="ctd">CTD</option>
                    <option value="do">DO</option>
                    <option value="flntu">FLNTU</option>
                </select>
            </div>
            <div>
                <label htmlFor="route">Select File Type:</label>
                <select name="route" id="route">
                    <option value=""></option>
                    <option value="header">Head</option>
                    <option value="data">Data</option>
                    <option value="combined">Combined</option>
                </select>
            </div>
            <div>
                <input type="file" onChange={onFileChange}/>
            </div>
            <div>
                <button id="uploadButton" onClick={onFileUpload}>Upload!</button>
            </div>
            {fileData()}
        </Container>
        );
    }

    return (
        <Container className="uploadsContainer" id="mainBodyContainer">
            {
                loading 
                ? <h1>loading...</h1> 
                : formatPage()
            }
        </Container>
    );
}

export default Uploads;
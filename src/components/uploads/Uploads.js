import React, { useState } from "react";
import Container from "../common/Container";
import {apiHostURL} from "../../config";
import "./Uploads.css";
import axios from "axios";

const Uploads = () => {
    const [state, setState] = useState({
        selectedFile: null
    });

    const onFileChange = (event) => {
        setState({
            selectedFile: event.target.files[0]
        });
    }

    const onFileUpload = async () => {
        const sensorValue = document.getElementById("sensor").value;
        const routeValue = document.getElementById("route").value;
        
        if (state.selectedFile) {

            if (sensorValue !== "" && routeValue !== "") {
                try {
                    const formData = new FormData();

                    const paramName = routeValue === "test" ? "processedFile" : "processedHead";
            
                    formData.append(
                        paramName,
                        state.selectedFile,
                        state.selectedFile.name
                    );
            
                    console.log(state.selectedFile);
                    
                    const res = await axios.post(`${apiHostURL}/api/processed/${sensorValue}/upload_csv/${routeValue}`, formData);

                    console.table(res.data);

                    alert("Success!");
                } catch (err) {
                    console.error(err.message ? err.message : err.response);
                }

            } else {
                alert("No Sensor or Upload Type Selected!");
            }

        } else {
            alert("No File Selected!");
        }
    }

    const fileData = () => {
        if (state.selectedFile) {
            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {state.selectedFile.name}</p>

                    <p>File Type: {state.selectedFile.type}</p>
                </div>
            );
        } else {
            return (
                <div>
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    }

    return (
        <Container id="uploadsContainer">
            <h1>CSV Upload Test</h1>
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
                <label htmlFor="route">Select File Type</label>
                <select name="route" id="route">
                    <option value=""></option>
                    <option value="header/test">Head</option>
                    <option value="test">Data</option>
                </select>
            </div>
            <div>
                <input type="file" onChange={onFileChange}/>
                <button onClick={onFileUpload}>Upload!</button>
            </div>
            {fileData()}
        </Container>
    );
}

export default Uploads;
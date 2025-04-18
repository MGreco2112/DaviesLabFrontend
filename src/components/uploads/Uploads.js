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
        
        if (state.selectedFile) {

            if (sensorValue !== "" && routeValue !== "" && landerValue !== "") {
                try {
                    const formData = new FormData();

                    let paramName = "";

                    if (routeValue === "header") {
                        paramName = "processedHead";
                    } else {
                        paramName = "processedFile";
                    }
                    
            
                    formData.append(
                        paramName,
                        state.selectedFile,
                        state.selectedFile.name
                    );
                    
                    const res = await axios.post(`${apiHostURL}/api/processed/${sensorValue}/upload_csv/${routeValue}/${landerValue}`, formData);

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
                <Container className="uploadsContainer">
                    <h4>Upload CSV Data from Lander Sensors</h4>
                    <p>Combined will Post to Server</p>
                    <p>Other options will only return data to the Console</p>
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
                <button onClick={onFileUpload}>Upload!</button>
            </div>
            {fileData()}
        </Container>
        );
    }

    return (
        <Container className="uploadsContainer">
            {loading ? <h1>loading...</h1> : formatPage()}
        </Container>
    );
}

export default Uploads;
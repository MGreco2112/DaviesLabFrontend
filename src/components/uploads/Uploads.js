import React, { useState } from "react";
import Container from "../common/Container";
import {apiHostURL} from "../../config";
import axios from "axios";

const Uploads = () => {
    const [state, setState] = useState({
        selectedFile: null
    });
    const [sensor, setSensor] = useState("");
    const [route, setRoute] = useState("");

    const onFileChange = (event) => {
        setState({
            selectedFile: event.target.files[0]
        });
    }

    const onFileUpload = () => {
        if (state.selectedFile) {

            if (sensor !== "" && route !== "") {
                try {
                    const formData = new FormData();
            
                    formData.append(
                        "testFile",
                        state.selectedFile,
                        state.selectedFile.name
                    );
            
                    console.log(state.selectedFile);
                    
                    axios.post(`${apiHostURL}/api/processed/${sensor}/upload_csv/${route}`, formData);
                    
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
        <Container>
            <h1>CSV Upload Test</h1>
            <div>
                <input type="file" onChange={onFileChange}/>
                <button onClick={onFileUpload}>Upload!</button>
                {/* TODO: Drop down menus to select Sensor and Data/Header route for testing */}
            </div>
            {fileData()}
        </Container>
    );
}

export default Uploads;
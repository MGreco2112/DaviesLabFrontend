import React, { useState } from "react";
import Container from "../common/Container";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import "./NewLander.css";
import { useNavigate } from "react-router-dom";
import { apiHostURL } from "../../config";

const NewLander = () => {
    const navigate = useNavigate();

    const [newLander, setNewLander] = useState({
        asdblanderID: "",
        landerPlatform: "",
        asdbrovdiveID: "",
        deploymentDateAndTime: "",
        recoveryDateAndTime: ""
    });

    const onSubmit = async () => {
        let exitFlag = false;
        
        Object.values(newLander).forEach((prop) => {
            if (prop === "") {
                
                exitFlag = true;
                return;
            }
        });

        if (exitFlag) {
            alert("Missing/Invalid Lander Elements Entered")
            return;
        }
        
        try {
            const res = await axios.post(`${apiHostURL}/api/landers/new_lander`, newLander);

            alert(res.data);
            navigate("/uploads");
        } catch (err) {
            console.error(err.response ? err.response : err.message);
        }
    }

    const onChange = (e) => {
        setNewLander({
            ...newLander,
            [e.target.id]: e.target.value
        });
    }

    const populatePage = () => {
        return (
            <Container className="NewLanderContainer">
                <h1>Post New Lander</h1>
                <Form>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>ASDB Lander ID:</InputGroup.Text>
                        <Form.Control
                            name="asdblanderID"
                            id="asdblanderID"
                            value={newLander.asdblanderID}
                            placeholder="ASDB Lander ID"
                            onChange={onChange}
                            required
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Lander Platform:</InputGroup.Text>
                        <Form.Control
                            name="landerPlatform"
                            id="landerPlatform"
                            value={newLander.landerPlatform}
                            placeholder="Lander Platform"
                            onChange={onChange}
                            required
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>ASDB ROV Dive ID:</InputGroup.Text>
                        <Form.Control
                            name="asdbrovdiveID"
                            id="asdbrovdiveID"
                            value={newLander.asdbrovdiveID}
                            placeholder="ASDB ROV Dive ID"
                            onChange={onChange}
                            required
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Deployment Date:</InputGroup.Text>
                        <Form.Control
                            type="date"
                            name="deploymentDateAndTime"
                            id="deploymentDateAndTime"
                            value={newLander.deploymentDateAndTime}
                            onChange={onChange}
                            required
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Recovery Date:</InputGroup.Text>
                        <Form.Control
                            type="date"
                            name="recoveryDateAndTime"
                            id="recoveryDateAndTime"
                            value={newLander.recoveryDateAndTime}
                            onChange={onChange}
                            required
                        />
                    </InputGroup>
                </Form>
                <Button
                    onClick={onSubmit}
                >Submit</Button>
            </Container>
        )
    }

    return (
        populatePage()
    );
}

export default NewLander;
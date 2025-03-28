import React, { useState } from "react";
import Container from "../common/Container";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Button from "../common/Button";
import axios from "axios";
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
                <InlineInputContainer className="LanderInputContainer">
                    <Input
                        name="asdblanderID"
                        id="asdblanderID"
                        value={newLander.asdblanderID}
                        placeholder="ASDB Lander ID"
                        onChange={onChange}
                        required
                    />
                </InlineInputContainer>
                <InlineInputContainer className="LanderInputContainer">
                    <Input
                        name="landerPlatform"
                        id="landerPlatform"
                        value={newLander.landerPlatform}
                        placeholder="Lander Platform"
                        onChange={onChange}
                        required
                    />
                </InlineInputContainer>
                <InlineInputContainer className="LanderInputContainer">
                    <Input
                        name="asdbrovdiveID"
                        id="asdbrovdiveID"
                        value={newLander.asdbrovdiveID}
                        placeholder="ASDB ROV Dive ID"
                        onChange={onChange}
                        required
                    />
                </InlineInputContainer>
                <InlineInputContainer className="DateInput">
                    <Input
                        type="date"
                        name="deploymentDateAndTime"
                        id="deploymentDateAndTime"
                        value={newLander.deploymentDateAndTime}
                        onChange={onChange}
                        required
                    />
                </InlineInputContainer>
                <InlineInputContainer className="DateInput">
                    <Input
                        type="date"
                        name="recoveryDateAndTime"
                        id="recoveryDateAndTime"
                        value={newLander.recoveryDateAndTime}
                        onChange={onChange}
                        required
                    />
                </InlineInputContainer>
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
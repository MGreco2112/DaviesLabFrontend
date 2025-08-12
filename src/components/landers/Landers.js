import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../common/Container";
import Button from "react-bootstrap/Button";
import {apiHostURL} from "../../config";
import { useNavigate } from "react-router-dom";
import Lander from "./Lander";
import "./Landers.css";
import Splash from "../common/Splash";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';

const Landers = () => {

    const [pageState, setPageState] = useState({
        landers: [],
        loading: true,
        query: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        const _getLanders = async () => {
            try {
                const res = await axios.get(`${apiHostURL}/api/landers/all`);

                setPageState({
                    ...pageState,
                    landers: res.data,
                    loading: false
                });
            } catch (err) {
                console.error(err.response ? err.response.data : err.response.message);
            }
        }

        setPageState({
            ...pageState,
            loading: true
        });

        _getLanders();
    }, []);

    //Create Lander elements via iteration, return created elements
    const displayLanders = () => {

        return pageState.landers.map(land => {
            return <Lander className="LanderCard" lander={land} key={land.asdblanderID} onSelect={onSelect}/>
        });
    }

    const populateSearchElement = () => {

        return (
            <Container className="LandersContainer">
                <Form>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Type of Search:</InputGroup.Text>
                        <Form.Select
                            id="searchSelect"
                            onChange={onSelectChange}
                        >
                            <option value=""></option>
                            <option value="landerId">Lander ID</option>
                            <option value="date">Date</option>
                        </Form.Select>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            name="searchInput"
                            id="searchInput"
                            onChange={onChange}
                            disabled
                        />
                    </InputGroup>
                </Form>
                <Button
                    onClick={onSubmit}
                >Search</Button>
            </Container>
        );
    }

    const onChange = (e) => {

        setPageState({
            ...pageState,
            query: e.target.value
        });
    }

    const onSelectChange = () => {
        const value = document.getElementById("searchSelect").value;
        const inputElement = document.getElementById("searchInput");

        if (value === "landerId" || value === "") {
            if (value === "") {
                inputElement.placeholder = "";
                inputElement.disabled = true;
            } else {
                inputElement.placeholder = "Enter Lander ID";
                inputElement.disabled = false;
            }

            inputElement.type = "text";
        } else if (value === "date") {
            inputElement.type = "date";
            inputElement.disabled = false;
        }
    }

    const onSubmit = async () => {
        const searchValue = document.getElementById("searchSelect").value;

        let urlVal = "";

        switch (searchValue) {
            case "landerId": {
                urlVal = `/api/landers/search/id/${pageState.query}`;
                break;
            }
            case "date": {
                urlVal = `/api/landers/search/date/${pageState.query}`;
                break;
            }
            default: {
                urlVal = "/api/landers/all";
                break;
            }
        }

        try {
            if (searchValue !== "") {
                const res = await axios.get(`${apiHostURL}${urlVal}`);
    
                setPageState({
                    ...pageState,
                    landers: res.data
                });
            } else {
                alert("Enter A Search Query");
            }
        } catch (err) {
            console.error(err.response ? err.response : err.message);
        }
    }

    const onSelect = (id) => {
        navigate(`/landers/${id}`);
    }

    return (
        <Container className="LandersContainer">
            <h1>Active Landers</h1>
            { 
                pageState.loading 
                ?
                <Container> 
                    <p>FETCHING DATA...</p>
                </Container>
                :
                <Container className="LandersContainer">
                    {populateSearchElement()}
                    {displayLanders()}
                    <Splash id="LanderSplash"/>
                </Container>
            }
        </Container>
    );
}

export default Landers;
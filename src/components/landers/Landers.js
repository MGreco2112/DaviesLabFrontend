import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../common/Container";
import Input from "../common/Input";
import Button from "../common/Button";
import InlineInputContainer from "../common/InlineInputContainer";
import {apiHostURL} from "../../config";
import { useNavigate } from "react-router-dom";
import Lander from "./Lander";
import "./Landers.css";

const Landers = () => {
    // Array State for Lander Objects
    const [landers, setLanders] = useState([]);
    // Loading State for holding page state while API call is made
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const _getLanders = async () => {
            try {
                const res = await axios.get(`${apiHostURL}/api/landers/all`);

                setLoading(false);
                console.table(res.data);
                setLanders(res.data);
            } catch (err) {
                console.error(err.response ? err.response.data : err.response.message);
            }
        }
        setLoading(true);
        _getLanders();
    }, []);

    //Create Lander elements via iteration, return created elements
    const displayLanders = () => {

        return landers.map(land => {
            return <Lander className="LanderCard" lander={land} key={land.asdblanderID} onSelect={onSelect}/>
        });
    }

    const populateSearchElement = () => {

        return (
            <Container className="LandersContainer">
                <InlineInputContainer className="inputContainer">
                    <label htmlFor="searchSelect">Type of Search:</label>
                    <select id="searchSelect" onChange={onSelectChange}>
                        <option value=""></option>
                        <option value="landerId">Lander ID</option>
                        <option value="date">Date</option>
                    </select>
                </InlineInputContainer>
                <InlineInputContainer className="inputContainer">
                    <Input
                        name="searchInput"
                        id="searchInput"
                        onChange={onChange}
                    />
                    <Button
                        onClick={onSubmit}
                    >Search</Button>
                </InlineInputContainer>
            </Container>
        )
    }

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    const onSelectChange = () => {
        const value = document.getElementById("searchSelect").value;
        const inputElement = document.getElementById("searchInput");

        if (value === "landerId" || value === "") {
            if (value === "") {
                inputElement.placeholder = "";
            } else {
                inputElement.placeholder = "Enter Lander ID";
            }

            inputElement.type = "text";
        } else if (value === "date") {
            inputElement.type = "date";
        }
    }

    const onSubmit = async () => {
        const searchValue = document.getElementById("searchSelect").value;

        let urlVal = "";

        switch (searchValue) {
            case "landerId": {
                urlVal = `/api/landers/search/id/${query}`;
                break;
            }
            case "date": {
                urlVal = `/api/landers/search/date/${query}`;
                break;
            }
            default: {
                urlVal = "/api/landers/all";
                break;
            }
        }

        try {
            const res = await axios.get(`${apiHostURL}${urlVal}`);

            setLanders(res.data);
        } catch (err) {
            console.error(err.response ? err.response : err.message);
        }
    }

    //onSelect function to navigate to future Lander Info page
    const onSelect = (id) => {
        navigate(`/landers/${id}`);
    }

    return (
        <Container className="LandersContainer">
            <h1>Active Landers</h1>
            { loading ? 
                <p>FETCHING DATA...</p>
                :
                <Container className="LandersContainer">
                    {populateSearchElement()}
                    {displayLanders()}
                </Container>
            }
        </Container>
    );
}

export default Landers;
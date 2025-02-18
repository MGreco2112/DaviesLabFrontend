import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../common/Container";
import {apiHostURL} from "../../config";
import { useNavigate } from "react-router-dom";
import Lander from "./Lander";

const Landers = () => {
    // Array State for Lander Objects
    const [landers, setLanders] = useState([]);
    // Loading State for holding page state while API call is made
    const [loading, setLoading] = useState(true);
    // Navigate function for new page rendering
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
            return <Lander lander={land} key={land.asdblanderID} onSelect={onSelect}/>
        });
    }

    //onSelect function to navigate to future Lander Info page
    const onSelect = (id) => {
        navigate(`/landers/${id}`);
    }

    return (
        <Container>
            <h1>Active Landers</h1>
            { loading ? 
                <p>FETCHING DATA...</p>
                :
                displayLanders()
            }
        </Container>
    );
}

export default Landers;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "../common/Container";
import { useParams } from "react-router-dom";
import { apiHostURL } from "../../config";

const DisplayLander = () => {
    const params = useParams();

    const [lander, setLander] = useState({
        asdblanderID: params.id
    });
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const _fetchLander = async () => {
            try {
                const res = await axios.get(`${apiHostURL}/api/landers/${lander.asdblanderID}`);

                setLoading(false);
                setLander(res.data);
                console.table(res.data);
            } catch (err) {
                console.error(err.message ? err.message : err.response);
            }
        }
    
        setLoading(true);
        _fetchLander();
    }, [lander.asdblanderID]);




    return(
        <Container>
            {
                loading ?
                    <p>FETCHING LANDER...</p>
                    :
                    <Container>
                        <p>Lander ID: {lander.asdblanderID}</p>
                        <p>CTD Header ID: {lander.ctdheads[0].headID}</p>
                        <p>DO Header ID: {lander.doheads[0].headID}</p>
                        <p>FLNTU Header ID: {lander.flntuheads[0].headID}</p>
                    </Container>
            }
        </Container>
    );
}

export default DisplayLander;
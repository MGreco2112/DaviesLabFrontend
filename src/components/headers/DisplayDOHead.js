import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiHostURL } from "../../config";
import BorderCard from "../common/BorderCard";
import Container from "../common/Container";

const DisplayDOHead = () => {
    const params = useParams();

    const [doHead, setDoHead] = useState({
        headID: params.id
    });
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const _fetchDoHead = async () => {
            try {
                const res = await axios.get(`${apiHostURL}/api/processed/do/headers/sanitized/${doHead.headID}`);

                setDoHead(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err.response ? err.response : err.message);
                
            }
        }

        setLoading(true);
        _fetchDoHead();
    }, [doHead.headID]);
    
    
    const formatPage = () => {
        return (
            <Container>
                <h1>DO DATA</h1>
                <BorderCard>
                    <h1>Sonde Name: {doHead.sondeName}</h1>
                    <p>Sonde Number: {doHead.sondeNo}</p>
                    <p>Sensor Type: {doHead.sensorType}</p>
                    <p>Channel: {doHead.channel}</p>
                    <p>Delay Time: {doHead.delayTime}</p>
                    <p>Pre Heat: {doHead.preHeat}</p>
                    <p>Meas Model: {doHead.measModel}</p>
                    <p>Burst Time: {doHead.burstTime}</p>
                    <p>Burst Count: {doHead.burstCount}</p>
                    <p>Interval: {doHead.intervalData}</p>
                    <p>Sample Count: {doHead.sampleCount}</p>
                    <p>Start Time: {doHead.startTime}</p>
                    <p>End Time: {doHead.endTime}</p>
                    <p>Dep Adi Rho: {doHead.depAdiRho}</p>
                    <p>Coeffecient Date: {doHead.coefDate}</p>
                    <p>Channel 1: {doHead.ch1}</p>
                    <p>Channel 2: {doHead.ch2}</p>
                    <p>Channel 3: {doHead.ch3}</p>
                    <p>Buzzer EN: {doHead.buzzerEN}</p>
                    <p>Buzzer Interval: {doHead.buzzerInterval}</p>
                    <p>Comment: {doHead.comment}</p>
                    <p>Sensor Type 2: {doHead.sensorType2}</p>
                    <p>Buzzer Number: {doHead.buzzerNumber}</p>
                    <p>Dep M: {doHead.depM}</p>
                    <p>Set Sal: {doHead.setSal}</p>
                    <p>Film Number: {doHead.filmNo}</p>
                </BorderCard>
            </Container>
        )
    }

    return(
        <Container>
            {
                loading 
                ?
                <h1>Fetching Data...</h1>
                :
                formatPage()
            }
        </Container>
    );
}

export default DisplayDOHead;
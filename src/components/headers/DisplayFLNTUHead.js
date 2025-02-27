import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiHostURL } from "../../config";
import BorderCard from "../common/BorderCard";
import Container from "../common/Container";

const DisplayFLNTUHead = () => {
    const params = useParams();

    const [flntuHead, setFlntuHead] = useState({
        headID: params.id
    });
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const _fetchFlntuHead = async () => {
            try {
                const res = await axios.get(`${apiHostURL}/api/processed/flntu/headers/sanitized/${flntuHead.headID}`);

                setFlntuHead(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err.response ? err.response : err.message);
                
            }
        }

        setLoading(true);
        _fetchFlntuHead();
    }, [flntuHead.headID]);

    console.table(flntuHead);

    const formatPage = () => {
        return (
            <Container>
                <h1>FLNTU DATA</h1>
                <BorderCard>
                    <h1>Sonde Name: {flntuHead.sondeName}</h1>
                    <p>Sonde Number: {flntuHead.sondeNo}</p>
                    <p>Sensor Type: {flntuHead.sensorType}</p>
                    <p>Channel: {flntuHead.channel}</p>
                    <p>Delay Time: {flntuHead.delayTime}</p>
                    <p>Pre Heat: {flntuHead.preHeat}</p>
                    <p>Meas Mode: {flntuHead.measMode}</p>
                    <p>Burst Time: {flntuHead.burstTime}</p>
                    <p>Burst Count: {flntuHead.burstCount}</p>
                    <p>Interval: {flntuHead.intervalData}</p>
                    <p>Wiper Interval: {flntuHead.wiperInterval}</p>
                    <p>Sample Count: {flntuHead.sampleCnt}</p>
                    <p>Start Time: {flntuHead.startTime}</p>
                    <p>End Time: {flntuHead.endTime}</p>
                    <p>CHLA: {flntuHead.chla}</p>
                    <p>CHLB: {flntuHead.chlb}</p>
                    <p>Coeffecient Date: {flntuHead.coefDate}</p>
                    <p>Channel 1: {flntuHead.ch1}</p>
                    <p>Channel 2: {flntuHead.ch2}</p>
                    <p>Channel 3: {flntuHead.ch3}</p>
                    <p>Channel 4: {flntuHead.ch4}</p>
                    <p>Buzzer EN: {flntuHead.buzzerEn}</p>
                    <p>Buzzer Interval: {flntuHead.buzzerInterval}</p>
                    <p>Comment: {flntuHead.comment}</p>
                    <p>Sensor Type 2: {flntuHead.sensorType2}</p>
                    <p>Buzzer Number: {flntuHead.buzzerNumber}</p>
                </BorderCard>
            </Container>
        );
    }

    return (
        <Container>
            {
                loading
                ?
                <h1>Fetching FLNTU Data...</h1>
                :
                formatPage()
            }
        </Container>
    );
}

export default DisplayFLNTUHead;
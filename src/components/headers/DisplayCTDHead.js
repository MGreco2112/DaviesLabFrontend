import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiHostURL } from "../../config";
import BorderCard from "../common/BorderCard";
import Container from "../common/Container";

const DisplayCTDHead = () => {
    const params = useParams();

    const [ctdHead, setCtdHead] = useState({
        headID: params.id
    });
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const _fetchCtdHead = async () => {
            try {
                const res = await axios.get(`${apiHostURL}/api/processed/ctd/headers/sanitized/${ctdHead.headID}`);

                setCtdHead(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err.response ? err.response : err.message);
            }
        }

        setLoading(true);
        _fetchCtdHead();
    }, [ctdHead.headID]);

    const formatPage = () => {

        return (
            //TODO add navigation to CTD Data page
            <Container>
                <BorderCard>
                    <h1>Sonde Name: {ctdHead.sondeName}</h1>
                    <p>Sonde Number: {ctdHead.sondeNo}</p>
                    <p>Sensor Type: {ctdHead.sensorType}</p>
                    <p>Channel: {ctdHead.channel}</p>
                    <p>Delay Time: {ctdHead.delayTime}</p>
                    <p>Pre Heat: {ctdHead.preHeat}</p>
                    <p>Meas Mode: {ctdHead.measMode}</p>
                    <p>Burst Time: {ctdHead.burstTime}</p>
                    <p>Burst Count: {ctdHead.burstCnt}</p>
                    <p>Interval: {ctdHead.intervalData}</p>
                    <p>Sample Count: {ctdHead.sampleCnt}</p>
                    <p>Start Time: {ctdHead.startTime}</p>
                    <p>End Time: {ctdHead.endTime}</p>
                    <p>Dep Adj Rho: {ctdHead.depAdiRho}</p>
                    <p>ECA: {ctdHead.eca}</p>
                    <p>ECB: {ctdHead.ecb}</p>
                    <p>EC Degrees: {ctdHead.ecdeg}</p>
                    <p>EC Coeffecient: {ctdHead.eccoef}</p>
                    <p>Coeffecient Date: {ctdHead.coefDate}</p>
                    <p>Channel 1: {ctdHead.ch1}</p>
                    <p>Channel 2: {ctdHead.ch2}</p>
                    <p>Channel 3: {ctdHead.ch3}</p>
                    <p>Channel 4: {ctdHead.ch4}</p>
                    <p>Buzzer EN: {ctdHead.buzzerEN}</p>
                    <p>Buzzer Interval: {ctdHead.buzzerInterval}</p>
                    <p>Comment: {ctdHead.comment}</p>
                    <p>sensorType2: {ctdHead.sensorType2}</p>
                    <p>Buzzer Number: {ctdHead.buzzerNumber}</p>
                    <p>DepM: {ctdHead.depM}</p>
                    <p>CondDepB: {ctdHead.condDepB}</p>
                </BorderCard>
            </Container>
        )
    }

    return (
        <Container>
            {
                loading
                ?
                <h1>LOADING CTD HEADER...</h1>
                :
                formatPage()
            }
        </Container>
    );
}

export default DisplayCTDHead;
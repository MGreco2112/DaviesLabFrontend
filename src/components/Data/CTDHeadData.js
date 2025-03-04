import React from "react";
import Container from "../common/Container";
import BorderCard from "../common/BorderCard";
import Button from "../common/Button";

const CTDHeadData = (props) => {
    const {sondeName, sondeNo, sensorType, channel, delayTime, preHeat, measMode, burstTime, burstCnt, intervalData, sampleCnt, startTime, endTime, depAdiRho, eca, ecb, ecdeg, eccoef, coefDate, ch1, ch2, ch3, ch4, buzzerEN, buzzerInterval, comment, sensorType2, buzzerNumber, depM, condDepB} = props.header;

    const {buttonDisabled, buttonId, onClick, chartName} = props.button;
    

    return (
        <Container id={props.id}>
            <h1>CTD DATA</h1>
            <BorderCard>
                <h1>Sonde Name: {sondeName}</h1>
                <p>Sonde Number: {sondeNo}</p>
                <p>Sensor Type: {sensorType}</p>
                <p>Channel: {channel}</p>
                <p>Delay Time: {delayTime}</p>
                <p>Pre Heat: {preHeat}</p>
                <p>Meas Mode: {measMode}</p>
                <p>Burst Time: {burstTime}</p>
                <p>Burst Count: {burstCnt}</p>
                <p>Interval: {intervalData}</p>
                <p>Sample Count: {sampleCnt}</p>
                <p>Start Time: {startTime}</p>
                <p>End Time: {endTime}</p>
                <p>Dep Adj Rho: {depAdiRho}</p>
                <p>ECA: {eca}</p>
                <p>ECB: {ecb}</p>
                <p>EC Degrees: {ecdeg}</p>
                <p>EC Coeffecient: {eccoef}</p>
                <p>Coeffecient Date: {coefDate}</p>
                <p>Channel 1: {ch1}</p>
                <p>Channel 2: {ch2}</p>
                <p>Channel 3: {ch3}</p>
                <p>Channel 4: {ch4}</p>
                <p>Buzzer EN: {buzzerEN}</p>
                <p>Buzzer Interval: {buzzerInterval}</p>
                <p>Comment: {comment}</p>
                <p>sensorType2: {sensorType2}</p>
                <p>Buzzer Number: {buzzerNumber}</p>
                <p>DepM: {depM}</p>
                <p>CondDepB: {condDepB}</p>
            </BorderCard>
            {
                document.getElementById({chartName})
                ?
                null
                :
                <Button
                    id={buttonId}
                    onClick={onClick}
                    disabled={buttonDisabled}
                >Show Data</Button>
            }
        </Container>
    );
}

export default CTDHeadData;
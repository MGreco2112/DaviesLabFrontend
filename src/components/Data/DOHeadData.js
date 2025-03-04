import React from "react";
import Container from "../common/Container";
import BorderCard from "../common/BorderCard";
import Button from "../common/Button";

const DOHeadData = (props) => {
    const {sondeName, sondeNo, sensorType, channel, delayTime, preHeat, measModel, burstTime, burstCount, intervalData, sampleCount, startTime, endTime, depAdiRho, coefDate, ch1, ch2, ch3, buzzerEN, buzzerInterval, comment, sensorType2, buzzerNumber, depM, setSal, filmNo} = props.header;

    const {buttonDisabled, buttonId, onClick} = props.button;


    return (
        <Container id={props.id}>
            <h1>DO DATA</h1>
            <BorderCard>
                <h1>Sonde Name: {sondeName}</h1>
                <p>Sonde Number: {sondeNo}</p>
                <p>Sensor Type: {sensorType}</p>
                <p>Channel: {channel}</p>
                <p>Delay Time: {delayTime}</p>
                <p>Pre Heat: {preHeat}</p>
                <p>Meas Model: {measModel}</p>
                <p>Burst Time: {burstTime}</p>
                <p>Burst Count: {burstCount}</p>
                <p>Interval: {intervalData}</p>
                <p>Sample Count: {sampleCount}</p>
                <p>Start Time: {startTime}</p>
                <p>End Time: {endTime}</p>
                <p>Dep Adi Rho: {depAdiRho}</p>
                <p>Coeffecient Date: {coefDate}</p>
                <p>Channel 1: {ch1}</p>
                <p>Channel 2: {ch2}</p>
                <p>Channel 3: {ch3}</p>
                <p>Buzzer EN: {buzzerEN}</p>
                <p>Buzzer Interval: {buzzerInterval}</p>
                <p>Comment: {comment}</p>
                <p>Sensor Type 2: {sensorType2}</p>
                <p>Buzzer Number: {buzzerNumber}</p>
                <p>Dep M: {depM}</p>
                <p>Set Sal: {setSal}</p>
                <p>Film Number: {filmNo}</p>
            </BorderCard>
            <Button
                id={buttonId}
                onClick={onClick}
                disabled={buttonDisabled}
            >Show Data</Button>
        </Container>
    );
}

export default DOHeadData;
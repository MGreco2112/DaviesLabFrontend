import React from "react";
import Container from "../common/Container";
import BorderCard from "../common/BorderCard";
import CustomizeFLNTUChartForm from "./CustomizeFLNTUChartForm";

const FLNTUHeadData = (props) => {
    const {sondeName, sondeNo, sensorType, channel, delayTime, preHeat, measMode, burstTime, burstCount, intervalData, wiperInterval, sampleCnt, startTime, endTime, chla, chlb, coefDate, ch1, ch2, ch3, ch4, buzzerEn, buzzerInterval, comment, sensorType2, buzzerNumber} = props.header;

    const {enabled, onSubmit} = props.form;

    return (
        <Container id={props.id}>
            <h1>FLNTU DATA</h1>
            <BorderCard>
                <h1>Sonde Name: {sondeName}</h1>
                <p>Sonde Number: {sondeNo}</p>
                <p>Sensor Type: {sensorType}</p>
                <p>Channel: {channel}</p>
                <p>Delay Time: {delayTime}</p>
                <p>Pre Heat: {preHeat}</p>
                <p>Meas Mode: {measMode}</p>
                <p>Burst Time: {burstTime}</p>
                <p>Burst Count: {burstCount}</p>
                <p>Interval: {intervalData}</p>
                <p>Wiper Interval: {wiperInterval}</p>
                <p>Sample Count: {sampleCnt}</p>
                <p>Start Time: {startTime}</p>
                <p>End Time: {endTime}</p>
                <p>CHLA: {chla}</p>
                <p>CHLB: {chlb}</p>
                <p>Coeffecient Date: {coefDate}</p>
                <p>Channel 1: {ch1}</p>
                <p>Channel 2: {ch2}</p>
                <p>Channel 3: {ch3}</p>
                <p>Channel 4: {ch4}</p>
                <p>Buzzer EN: {buzzerEn}</p>
                <p>Buzzer Interval: {buzzerInterval}</p>
                <p>Comment: {comment}</p>
                <p>Sensor Type 2: {sensorType2}</p>
                <p>Buzzer Number: {buzzerNumber}</p>
            </BorderCard>
            {
                enabled
                ?
                <CustomizeFLNTUChartForm onSubmit={onSubmit}/>
                :
                false
            }
        </Container>
    );
}

export default FLNTUHeadData;
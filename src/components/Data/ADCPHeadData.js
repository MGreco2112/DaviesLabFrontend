import React from "react";
import Container from "../common/Container";
import BorderCard from "../common/BorderCard";
import "./Data.css";
import CustomizeADCPChartForm from "./CustomizeADCPChartForm.js";

const ADCPHeadData = (props) => {
    const {headID, startTime, endTime, dataPointCount} = props.header;
    const {enabled, onSubmit, csvButtonFunct} = props.form;

    return (
        <Container id={props.id}>
            <h1>ADCP Data</h1>
            <BorderCard>
                <h1>ADCP Head ID: {headID}</h1>
                <p>Deployment Date: {startTime}</p>
                <p>Recovery Date: {endTime}</p>
                <p>Data Points: {dataPointCount}</p>
            </BorderCard>
            {
                enabled && dataPointCount > 0
                ?
                <CustomizeADCPChartForm onSubmit={onSubmit} csvFunct={csvButtonFunct}/>
                :
                    enabled && dataPointCount <= 0
                    ?
                    <h2>No Data Available To Chart</h2>
                    :
                null
            }
        </Container>
    );
}

export default ADCPHeadData;
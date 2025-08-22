import React from "react";
import Container from "../common/Container";
import BorderCard from "../common/BorderCard";
import "./Data.css";
import CustomizeADCPChartForm from "./CustomizeADCPChartForm.js";

const ADCPHeadData = (props) => {
    const {headID, startTime, endTime, dataPointCount, alignedDataPointCount} = props.header;
    const {enabled, onSubmit, csvButtonFunct} = props.form;

    return (
        <Container id={props.id}>
            <h1>ADCP Data</h1>
            <BorderCard className="HeadCard">
                <h1>ADCP Head ID: {headID}</h1>
                <p>Deployment Date: {new Date(startTime).toDateString()}</p>
                <p>Recovery Date: {new Date(endTime).toDateString()}</p>
                <p>Data Points: {dataPointCount}</p>
                <p>Aligned Data Points: {alignedDataPointCount}</p>
            </BorderCard>
            {
                enabled && alignedDataPointCount > 0
                ?
                <CustomizeADCPChartForm onSubmit={onSubmit} csvFunct={csvButtonFunct}/>
                :
                    enabled && alignedDataPointCount <= 0
                    ?
                    <h2>No Data Available To Chart</h2>
                    :
                null
            }
        </Container>
    );
}

export default ADCPHeadData;
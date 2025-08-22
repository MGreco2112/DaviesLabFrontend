import React from "react";
import Container from "../common/Container";
import BorderCard from "../common/BorderCard";
import "./Data.css";
import CustomizeALBEXCTDChartForm from "./CustomizeALBEXCTDChartForm";

const ALBEXHeadData = (props) => {
    const {headID, startTime, endTime, dataPointCount} = props.header;
    const {enabled, onSubmit, csvButtonFunct} = props.form;

    return (
        <Container id={props.id}>
            <h1>ALBEX CTD Data</h1>
            <BorderCard className="HeadCard">
                <h1>ALBEX CTD Head ID: {headID}</h1>
                <p>Deployment Date: {new Date(startTime).toDateString()}</p>
                <p>Recovery Date: {new Date(endTime).toDateString()}</p>
                <p>Data Points: {dataPointCount}</p>
            </BorderCard>
            {
                enabled && dataPointCount > 0
                ?
                <CustomizeALBEXCTDChartForm onSubmit={onSubmit} csvFunct={csvButtonFunct}/>
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

export default ALBEXHeadData;
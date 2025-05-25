import React from "react";
import Container from "../common/Container";
import BorderCard from "../common/BorderCard";
import "./Data.css";
import CustomizeALBEXCTDChartForm from "./CustomizeALBEXCTDChartForm";

const ALBEXHeadData = (props) => {
    const {headID, dataPointCount} = props.header;
    const {enabled, onSubmit} = props.form;

    return (
        <Container id={props.id}>
            <h1>ALBEX CTD Data</h1>
            <BorderCard>
                <h1>ALBEX CTD Head ID: {headID}</h1>
                <p>Data Points: {dataPointCount}</p>
            </BorderCard>
            {
                enabled && dataPointCount > 0
                ?
                <CustomizeALBEXCTDChartForm onSubmit={onSubmit}/>
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
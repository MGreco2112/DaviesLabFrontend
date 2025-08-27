import React from "react";
import Container from "../../common/Container";
import BorderCard from "../../common/BorderCard";
import "../Data.css";
import CustomizeBeaconChartForm from "../DataForms/CustomizeBeaconChartForm";

const BeaconHead = (props) => {
    const {dataPointCount} = props.header;

    const {enabled, onSubmit, csvButtonFunct} = props.form;

    return (
        <Container id={props.id}>
            <h1>Beacon Data</h1>
            <BorderCard className="HeadCard">
                <p>Will populate with header metadata</p>
            </BorderCard>
            {
                enabled && dataPointCount > 0
                ?
                <CustomizeBeaconChartForm onSubmit={onSubmit} csvFunct={csvButtonFunct}/>
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

export default BeaconHead;
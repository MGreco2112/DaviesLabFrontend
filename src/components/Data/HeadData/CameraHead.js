import React from "react";
import Container from "../../common/Container";
import BorderCard from "../../common/BorderCard";
import "../Data.css";
import CustomizeCameraChartForm from "../DataForms/CustomizeCameraChartForm";

const CameraHead = (props) => {
    const {dataPointCount} = props.header;

    const {enabled, onSubmit, csvButtonFunct} = props.form;

    return (
        <Container id={props.id}>
            <h1>Camera Data</h1>
            <BorderCard className="HeadCard">
                <p>Populate with </p>
            </BorderCard>
            {
                enabled && dataPointCount > 0
                ?
                <CustomizeCameraChartForm onSubmit={onSubmit} csvFunct={csvButtonFunct}/>
                :
                    enabled && dataPointCount <= 0
                    ?
                    <h2>No Data Available To Chart</h2>
                    :
                null
            }
        </Container>
    )
}

export default CameraHead;
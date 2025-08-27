import React from "react";
import Container from "../../common/Container";
import BorderCard from "../../common/BorderCard";
import "../Data.css";
import CustomizeSedimentTrapChartForm from "../DataForms/CustomizeSedimentTrapChatForm";

const SedimentTraphead = (props) => {
    const {dataPointCount} = props.header;

    const {enabled, onSubmit, csvButtonFunct} = props.form;

    return (
        <Container id={props.id}>
            <h1>Sediment Trap Data</h1>
            <BorderCard className="HeadCard">
                <p>Update with Head Metadata</p>
            </BorderCard>
            {
                enabled && dataPointCount > 0
                ?
                <CustomizeSedimentTrapChartForm onSubmit={onSubmit} csvFunct={csvButtonFunct}/>
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

export default SedimentTraphead;
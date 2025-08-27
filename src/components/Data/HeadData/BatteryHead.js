import React from "react";
import Container from "../../common/Container";
import BorderCard from "../../common/BorderCard";
import CustomizeBatteryChartForm from "../DataForms/CustomizeBatteryChartForm"
import "../Data.css";

const BatteryHead = (props) => {
    // Add Header Metadata Destructuring once that info exists

    const {dataPointCount} = props.header;

    const {enabled, onSubmit, csvButtonFucnt} = props.form;

    return (
        <Container id={props.id}>
            <h1>Battery Data</h1>
            <BorderCard className="HeadCard">
               <p>Populate this with meta information</p> 
            </BorderCard>
            {
                enabled && dataPointCount > 0
                ?
                <CustomizeBatteryChartForm onSubmit={onSubmit} csvFunct={csvButtonFucnt}/>
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

export default BatteryHead;
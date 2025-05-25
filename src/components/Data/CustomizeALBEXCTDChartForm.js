import React from "react";
import Container from "../common/Container";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Form from "../common/Form";
import Checkbox from "../common/Checkbox";
import Button from "../common/Button";

const CustomizeALBEXCTDChartForm = (props) => {
    const {onSubmit} = props;

    return (
        <Container id="FormContainer">
            <h1>ALBEX CTD Chart Options</h1>
            <InlineInputContainer className="FormInputContainer">
                <Input
                    className="DateInput"
                    id="startDateInput"
                    type="date"
                    label="Start Date"
                />
            </InlineInputContainer>
                        <InlineInputContainer className="FormInputContainer">
                <Input
                    className="DateInput"
                    id="endDateInput"
                    type="date"
                    label="End Date"
                />
            </InlineInputContainer>
            <Form onSubmit={onSubmit} id="ChartForm">
                {/*     private Integer Flag; */
                }
                <InlineInputContainer className="FormInputContainer">
                    <Checkbox
                        className="dataCheckbox"
                        name="salinity"
                        label="Salinity"
                        id="salinity"
                        value="salinity"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="temperature"
                        label="Temperature"
                        id="temperature"
                        value="temperature"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="oxygen_ml_l"
                        label="Oxygen (ML/L)"
                        id="oxygen_ml_l"
                        value="oxygen_ml_l"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="oxygenSat_percent"
                        label="Oxygen Saturation (%)"
                        id="oxygenSat_percent"
                        value="oxygenSat_percent"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="turbidity_ntu"
                        label="Turbidity (NTU)"
                        id="turbidity_ntu"
                        value="turbidity_ntu"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="chla_ug_ml"
                        label="CHLA (UG/ML)"
                        id="chla_ug_ml"
                        value="chla_ug_ml"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="pressure_db"
                        label="Pressure (DB)"
                        id="pressure_db"
                        value="pressure_db"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="flag"
                        label="Flag"
                        id="flag"
                        value="flag"
                    />
                </InlineInputContainer>
                <Container id="ButtonContainer">
                    <Button 
                        id="SubmitButton" 
                    >Create Chart</Button>
                </Container>
            </Form>
        </Container>
    )
}

export default CustomizeALBEXCTDChartForm;
import React from "react";
import Container from "../common/Container";
import Form from "../common/Form";
import Input from "../common/Input";
import InlineInputContainer from "../common/InlineInputContainer";
import Checkbox from "../common/Checkbox";
import Button from "../common/Button";
import BorderCard from "../common/BorderCard";
import InputGroup from 'react-bootstrap/InputGroup';
import BootstrapForm from "react-bootstrap/Form";


const CustomizeCTDChartForm = (props) => {
    const {onSubmit, csvFunct} = props;

    return (
        <Container id="FormContainer">
            <h1>CTD Chart Options</h1>
            <BootstrapForm>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Start Date:</InputGroup.Text>
                        <BootstrapForm.Control
                            className="DateInput"
                            id="startDateInput"
                            type="date"
                            label="Start Date"
                            // labelID="StartDateLabel"
                        />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>End Date:</InputGroup.Text>
                    <BootstrapForm.Control
                        className="DateInput"
                        id="endDateInput"
                        type="date"
                        label="End Date"
                        // labelID="EndDateLabel"
                    />
                </InputGroup>
            </BootstrapForm>
            <Form onSubmit={onSubmit} id="ChartForm">
                <InlineInputContainer className="FormInputContainer">
                    <Checkbox
                        className="dataCheckbox"
                        divClassName="checkboxDiv"
                        name="Temp Degrees (C)"
                        label="Temp Degrees (C)"
                        id="temperature_C"
                        value="temperature_C"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        divClassName="checkboxDiv"
                        name="Oxygen Sat %"
                        label="Oxygen Sat %"
                        id="oxygen_Sat_Percent"
                        value="oxygen_Sat_Percent"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        divClassName="checkboxDiv"
                        name="Pressure"
                        label="Pressure"
                        id="pressure"
                        value="pressure"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        divClassName="checkboxDiv"
                        name="Oxygen (ML/L)"
                        label="Oxygen (ML/L)"
                        id="oxygen_ML_L"
                        value="oxygen_ML_L"
                    />
                </InlineInputContainer>
                <InlineInputContainer className="FormInputContainer">
                    <Checkbox
                        className="dataCheckbox"
                        divClassName="checkboxDiv"
                        name="Turbidity NTU"
                        label="Turbidity NTU"
                        id="turbidity_NTU"
                        value="turbidity_NTU"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        divClassName="checkboxDiv"
                        name="CHLA (UG/ML)"
                        label="CHLA (UG/ML)"
                        id="chla_ug_mL"
                        value="chla_ug_mL"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        divClassName="checkboxDiv"
                        name="CTD Flag"
                        label="CTD Flag"
                        id="ctd_Flag"
                        value="ctd_Flag"
                    />
                </InlineInputContainer>
                <Container id="ButtonContainer">
                    <Button 
                        id="SubmitButton" 
                    >Create Chart</Button>
                </Container>
            </Form>
            <h1>Create Sensor CSV</h1>
            <BorderCard id="CSVBorderCard" className="ChartBorder">
                <Button
                    id="CsvButton"
                    onClick={csvFunct}
                >Create CSV</Button>
            </BorderCard>
        </Container>
    );
}

export default CustomizeCTDChartForm;
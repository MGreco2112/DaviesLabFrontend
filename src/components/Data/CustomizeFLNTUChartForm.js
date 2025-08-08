import React from "react";
import Container from "../common/Container";
import Form from "../common/Form";
import Checkbox from "../common/Checkbox";
import Button from "../common/Button";
import InlineInputContainer from "../common/InlineInputContainer";
import BorderCard from "../common/BorderCard";
import InputGroup from 'react-bootstrap/InputGroup';
import BootstrapForm from "react-bootstrap/Form";


const CustomizeFLNTUChartForm = (props) => {
    const {onSubmit, csvFunct} = props;

    return (
        <Container id="FormContainer">
            <h1>FLNTU Chart Options</h1>
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
                        label = "Temp Degrees (C)"
                        id="tempDegC"
                        value="tempDegC"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        divClassName="checkboxDiv"
                        name="Chl Flu PPB"
                        label = "Chl Flu PPB"
                        id="chlFluPPB"
                        value="chlFluPPB"
                    />
                </InlineInputContainer>
                <InlineInputContainer className="FormInputContainer">
                    <Checkbox
                        className="dataCheckbox"
                        divClassName="checkboxDiv"
                        name="Chl AU gL"
                        label = "Chl AU gL"
                        id="chlAUgL"
                        value="chlAUgL"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        divClassName="checkboxDiv"
                        name="Turb MFTU"
                        label = "Turb MFTU"
                        id="turbMFTU"
                        value="turbMFTU"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        divClassName="checkboxDiv"
                        name="Batt V"
                        label = "Batt V"
                        id="battV"
                        value="battV"
                    />
                </InlineInputContainer>
                <Container id="ButtonContainer">
                    <Button
                        id="SubmitButton"
                        disabled={document.getElementById("SensorChart")}
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
    )
}

export default CustomizeFLNTUChartForm;
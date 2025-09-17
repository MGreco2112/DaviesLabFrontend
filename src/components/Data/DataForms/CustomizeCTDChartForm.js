import React from "react";
import Container from "../../common/Container";
import Form from "../../common/Form";
import InlineInputContainer from "../../common/InlineInputContainer";
import Checkbox from "../../common/Checkbox";
import Button from "../../common/Button";
import BorderCard from "../../common/BorderCard";
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
                        />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>End Date:</InputGroup.Text>
                    <BootstrapForm.Control
                        className="DateInput"
                        id="endDateInput"
                        type="date"
                        label="End Date"
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
                        value="tempDegC"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        divClassName="checkboxDiv"
                        name="Salinity"
                        label="Salinity"
                        id="Salinity"
                        value="sal"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        divClassName="checkboxDiv"
                        name="Cond Ms Cm"
                        label="Cond Ms Cm"
                        id="Cond Ms Cm"
                        value="condMsCm"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        divClassName="checkboxDiv"
                        name="EC25 Us Cm"
                        label="EC25 Us Cm"
                        id="EC25 Us Cm"
                        value="ec25UsCm"
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
                        name="Battery Voltage"
                        label="Battery Voltage"
                        id="Battery Voltage"
                        value="battV"
                    />
                    {/* <Checkbox
                        className="dataCheckbox"
                        divClassName="checkboxDiv"
                        name="CTD Flag"
                        label="CTD Flag"
                        id="ctd_Flag"
                        value="ctd_Flag"
                    /> */}
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
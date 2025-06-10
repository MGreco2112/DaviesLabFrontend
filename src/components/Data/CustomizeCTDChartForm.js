import React from "react";
import Container from "../common/Container";
import Form from "../common/Form";
import Input from "../common/Input";
import InlineInputContainer from "../common/InlineInputContainer";
import Checkbox from "../common/Checkbox";
import Button from "../common/Button";
import BorderCard from "../common/BorderCard";

const CustomizeCTDChartForm = (props) => {
    const {onSubmit, csvFunct} = props;

    return (
        <Container id="FormContainer">
            <h1>CTD Chart Options</h1>
            <InlineInputContainer className="FormInputContainer">
                <Input
                    className="DateInput"
                    id="startDateInput"
                    type="date"
                    label="Start Date"
                    labelID="StartDateLabel"
                />
            </InlineInputContainer>
            <InlineInputContainer className="FormInputContainer">
                <Input
                    className="DateInput"
                id="endDateInput"
                type="date"
                label="End Date"
                labelID="EndDateLabel"
                />
            </InlineInputContainer>
            <Form onSubmit={onSubmit} id="ChartForm">
                <InlineInputContainer className="FormInputContainer">
                    <Checkbox
                        className="dataCheckbox"
                        divClassName="checkboxDiv"
                        name="Temp Degrees (C)"
                        label="Temp Degrees (C)"
                        id="tempDegC"
                        value="tempDegC"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        divClassName="checkboxDiv"
                        name="Sal"
                        label="Sal"
                        id="sal"
                        value="sal"
                    />
                </InlineInputContainer>
                <InlineInputContainer className="FormInputContainer">
                    <Checkbox
                        className="dataCheckbox"
                        divClassName="checkboxDiv"
                        name="Cond Ms Cm"
                        label="Cond Ms Cm"
                        id="condMsCm"
                        value="condMsCm"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        divClassName="checkboxDiv"
                        name="Batt V"
                        label="Batt V"
                        id="battV"
                        value="battV"
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
import React from "react";
import Container from "../common/Container";
import Form from "../common/Form";
import Input from "../common/Input";
import InlineInputContainer from "../common/InlineInputContainer";
import Checkbox from "../common/Checkbox";
import Button from "../common/Button";

const CustomizeCTDChartForm = (props) => {
    const {onSubmit} = props;

    return (
        <Container id="FormContainer">
            <h1>CTD Chart Options</h1>
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
                <InlineInputContainer className="FormInputContainer">
                    <Checkbox
                        className="dataCheckbox"
                        name="Temp Degrees (C)"
                        label="Temp Degrees (C)"
                        id="tempDegC"
                        value="tempDegC"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="Sal"
                        label="Sal"
                        id="sal"
                        value="sal"
                    />
                </InlineInputContainer>
                <InlineInputContainer className="FormInputContainer">
                    <Checkbox
                        className="dataCheckbox"
                        name="Cond Ms Cm"
                        label="Cond Ms Cm"
                        id="condMsCm"
                        value="condMsCm"
                    />
                    <Checkbox
                        className="dataCheckbox"
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
        </Container>
    );
}

export default CustomizeCTDChartForm;
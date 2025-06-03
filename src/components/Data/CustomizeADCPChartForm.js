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
            <h1>ADCP Chart Options</h1>
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
                        name="battery"
                        label="Battery"
                        id="battery"
                        value="battery"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="heading"
                        label="Heading"
                        id="heading"
                        value="heading"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="pitch"
                        label="Pitch"
                        id="pitch"
                        value="pitch"
                    />
                </InlineInputContainer>
                <InlineInputContainer className="FormInputContainer">
                    <Checkbox
                        className="dataCheckbox"
                        name="roll"
                        label="Roll"
                        id="roll"
                        value="roll"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="pressure"
                        label="Pressure"
                        id="pressure"
                        value="pressure"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="temperature"
                        label="Temperature"
                        id="temperature"
                        value="temperature"
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

export default CustomizeALBEXCTDChartForm;
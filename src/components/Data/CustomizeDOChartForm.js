import React from "react";
import Container from "../common/Container";
import Form from "../common/Form";
import Input from "../common/Input";
import InlineInputContainer from "../common/InlineInputContainer";
import Checkbox from "../common/Checkbox";
import Button from "../common/Button";

const CustomizeDOChartForm = (props) => {
    const {onSubmit} = props;

    return (
        <Container id="FormContainer">
            <h1>DO Chart Options</h1>
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
                        name="DO"
                        label="DO"
                        id="do"
                        value="do"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="Weiss Do Mg L"
                        label="Weiss Do Mg L"
                        id="weissDoMgL"
                        value="weissDoMgL"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="Batt V"
                        label="Batt V"
                        id="battV"
                        value="battV"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="GG DO Mg L"
                        label="GG DO Mg L"
                        id="ggdomgL"
                        value="ggdomgL"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="BK DO Mg L"
                        label="BK DO Mg L"
                        id="bkdomgL"
                        value="bkdomgL"
                    />
                </InlineInputContainer>
                <Container id="ButtonContainer">
                    <Button
                        id="SubmitButton"
                        disabled={document.getElementById("SensorChart")}
                    >Create Chart</Button>
                </Container>
            </Form>
        </Container>
    )
}

export default CustomizeDOChartForm;
import React from "react";
import Container from "../common/Container";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Form from "../common/Form";
import Checkbox from "../common/Checkbox";
import Button from "../common/Button";
import BorderCard from "../common/BorderCard";

const CustomizeALBEXCTDChartForm = (props) => {
    const {onSubmit, csvFunct} = props;
    return (
        <Container id="FormContainer">
            <h1>ADCP Chart Options</h1>
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
                        name="Horizontal Current Speed (CM/s)"
                        label="Horizontal Current Speed (CM/s)"
                        id="horizontal_Current_Speed_cm_s"
                        value="horizontal_Current_Speed_cm_s"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        divClassName="checkboxDiv"
                        name="Vertical Current Speed (CM/s)"
                        label="Vertical Current Speed (CM/s)"
                        id="vertical_Current_Speed_cm_s"
                        value="vertical_Current_Speed_cm_s"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        divClassName="checkboxDiv"
                        name="Current Direction"
                        label="Current Direction"
                        id="current_Direction"
                        value="current_Direction"
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

export default CustomizeALBEXCTDChartForm;
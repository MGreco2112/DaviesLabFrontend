import React from "react";
import Container from "../../common/Container";
import InlineInputContainer from "../../common/InlineInputContainer";
import Form from "../../common/Form";
import Checkbox from "../../common/Checkbox";
import Button from "../../common/Button";
import BorderCard from "../../common/BorderCard";
import InputGroup from "react-bootstrap/InputGroup";
import BootstrapForm from "react-bootstrap/Form";

const CustomizeBeaconChartForm = (props) => {
    const {onSubmit, csvFunct} = props;

    return (
        <Container id="FormContainer">
            <h1>Beacon Chart Options</h1>
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
                {/* Add checkboxes for data fields */}
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

export default CustomizeBeaconChartForm;
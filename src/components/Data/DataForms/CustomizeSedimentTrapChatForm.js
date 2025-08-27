import React from "react";
import Container from "../../common/Container";
import InlineInputContainer from "../../common/InlineInputContainer";
import Form from "../../common/Form";
import Checkbox from "../../common/Checkbox";
import Button from "../../common/Button";
import BorderCard from "../../common/BorderCard";
import InputGroup from 'react-bootstrap/InputGroup';
import BootstrapForm from "react-bootstrap/Form";

const CustomizeSedimentTrapChartForm = (props) => {
    const {onSubmit, csvFunct} = props;

    return (
        <Container id="FormContainer">
            <h1>Sediment Trap Chart Options</h1>
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
                {/* Add checkboxes */}
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

export default CustomizeSedimentTrapChartForm;
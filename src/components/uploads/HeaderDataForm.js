import React from "react";
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from "../common/Container";

const HeaderDataForm = (props) => {
    const setChange = props.updateRange;
    const id = props.id;
    const className = props.className;
    const state = props.state;

    const onChange = (e) => {
        setChange({
            ...state,
            dateRange: {
                ...state.dateRange,
                [e.target.id]: e.target.value
            }
        });
    }
    

    return (
        <Container id={id} className={className}>
            <h3>Data Range Information</h3>
            <Form>
                <Row>
                
                <InputGroup className="mb-3">
                    <InputGroup.Text>Burst Count:</InputGroup.Text>
                        <Form.Control
                            label="Burst Count"
                            name="burstCnt"
                            id="burstCnt"
                            type="number"
                            min={1}
                            value={props.header.burstCtn}
                            onChange={onChange}
                            required
                        />
                    </InputGroup>
                </Row>
                <Row>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Burst Time:</InputGroup.Text>
                        <Form.Control
                            label="Burst Time"
                            name="burstTime"
                            id="burstTime"
                            type="number"
                            min={0}
                            value={props.header.burstTime}
                            onChange={onChange}
                            required
                        />
                    </InputGroup>
                </Row>
                <Row>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Start Date:</InputGroup.Text>
                        <Form.Control
                            label="Start Date"
                            name="startTime"
                            id="startTime"
                            value={props.header.startTime}
                            type="date"
                            onChange={onChange}
                            required
                        />
                    </InputGroup>
                </Row>
                <Row>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>End Date:</InputGroup.Text>
                        <Form.Control
                            label="End Date"
                            name="endTime"
                            id="endTime"
                            value={props.header.endTime}
                            type="date"
                            onChange={onChange}
                            required
                        />
                    </InputGroup>
                </Row>
            </Form>
        </Container>
    );
}

export default HeaderDataForm;
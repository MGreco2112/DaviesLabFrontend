import React from "react";
import Container from "../common/Container";
import Input from "../common/Input";
import InlineInputContainer from "../common/InlineInputContainer";

const HeaderDataForm = (props) => {
    const setChange = props.updateRange;
    const id = props.id;
    const className = props.className;

    const onChange = (e) => {
        setChange({
            ...props.header,
            [e.target.id]: e.target.value
        });
    }
    

    return (
        <Container id={id} className={className}>
            <h3>Data Range Information</h3>
            <InlineInputContainer>
                <Input
                    label="Burst Count"
                    name="burstCnt"
                    id="burstCnt"
                    type="number"
                    min={1}
                    value={props.header.burstCtn}
                    onChange={onChange}
                    required
                />
            </InlineInputContainer>
            <InlineInputContainer>
                <Input
                    label="Burst Time"
                    name="burstTime"
                    id="burstTime"
                    type="number"
                    min={0}
                    value={props.header.burstTime}
                    onChange={onChange}
                    required
                />
            </InlineInputContainer>
            <InlineInputContainer>
                <Input
                    label="Start Date"
                    name="startTime"
                    id="startTime"
                    value={props.header.startTime}
                    type="date"
                    onChange={onChange}
                    required
                />
            </InlineInputContainer>
            <InlineInputContainer>
                <Input
                    label="End Date"
                    name="endTime"
                    id="endTime"
                    value={props.header.endTime}
                    type="date"
                    onChange={onChange}
                    required
                />
            </InlineInputContainer>
        </Container>
    );
}

export default HeaderDataForm;
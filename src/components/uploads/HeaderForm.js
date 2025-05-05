import React from "react";
import Container from "../common/Container";
import Input from "../common/Input";
import InlineInputContainer from "../common/InlineInputContainer";

const HeaderForm = (header, onChange, onSubmit) => {
    const {startDate, endDate, burstCnt, burstTime} = header;

    return (
        <Container>
            <InlineInputContainer>
                <Input
                    label="Start Date"

                />
            </InlineInputContainer>
        </Container>
    )
}
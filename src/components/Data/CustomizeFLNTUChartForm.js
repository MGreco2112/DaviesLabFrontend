import React from "react";
import Container from "../common/Container";
import Form from "../common/Form";
import Checkbox from "../common/Checkbox";
import Button from "../common/Button";
import InlineInputContainer from "../common/InlineInputContainer";

const CustomizeFLNTUChartForm = (props) => {
    const {onSubmit} = props;

    return (
        <Container id="FormContainer">
            <h1>FLNTU Chart Options</h1>
            <Form onSubmit={onSubmit} id="ChartForm">
                <InlineInputContainer className="FormInputContainer">
                    <Checkbox
                        className="dataCheckbox"
                        name="Temp Degrees (C)"
                        label = "Temp Degrees (C)"
                        id="tempDegC"
                        value="tempDegC"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="Chl Flu PPB"
                        label = "Chl Flu PPB"
                        id="chlFluPPB"
                        value="chlFluPPB"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="Chl AU gL"
                        label = "Chl AU gL"
                        id="chlAUgL"
                        value="chlAUgL"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="Turb MFTU"
                        label = "Turb MFTU"
                        id="turbMFTU"
                        value="turbMFTU"
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="Batt V"
                        label = "Batt V"
                        id="battV"
                        value="battV"
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

export default CustomizeFLNTUChartForm;
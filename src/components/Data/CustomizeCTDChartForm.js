import React from "react";
import Container from "../common/Container";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Checkbox from "../common/Checkbox";
import Button from "../common/Button";

const CustomizeCTDChartForm = (props) => {
    const {onSubmit, setOuterArr} = props;

    
    const onClick = () => {
        const dataButtons = document.getElementsByClassName("dataCheckbox");
        const dataValues = [];

        for (let i = 0; i < dataButtons.length; i++) {
            if (dataButtons[i].checked) {
                const tempObj = {
                    label: dataButtons[i].name,
                    data: dataButtons[i].value
                }

                dataValues.push(tempObj)
            }

        }

        console.log(dataValues);
        

        setOuterArr(dataValues);
    }

    return (
        <Container id="FormContainer">
            <h1>CTD Chart Options</h1>
            <Form onSubmit={onSubmit} id="ChartForm">
                <InlineInputContainer className="FormInputContainer">
                    <Checkbox
                        className="dataCheckbox"
                        name="Temp Degrees (C)"
                        label="Temp Degrees (C)"
                        id="tempDegC"
                        value="tempDegC"
                        onChange={onClick}
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="Sal"
                        label="Sal"
                        id="sal"
                        value="sal"
                        onChange={onClick}
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="Cond Ms Cm"
                        label="Cond Ms Cm"
                        id="condMsCm"
                        value="condMsCm"
                        onChange={onClick}
                    />
                    <Checkbox
                        className="dataCheckbox"
                        name="Batt V"
                        label="Batt V"
                        id="battV"
                        value="battV"
                        onChange={onClick}
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
    );
}

export default CustomizeCTDChartForm;
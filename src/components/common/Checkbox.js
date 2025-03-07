import React from "react";
import Container from "./Container";

const Checkbox = (props) => {
    return(
        <Container style={{minHeight: "fitContent"}}>
            <input
                style={{...props.style}}
                type="checkbox"
                id={props.id}
                name={props.name}
                className={props.className}
                value={props.value}
                onChange={props.onChange}
                defaultChecked={props.checked}
            />
            <label
                htmlFor={props.id}
            >
                {props.label}
            </label>
        </Container>
    )
}

export default Checkbox;
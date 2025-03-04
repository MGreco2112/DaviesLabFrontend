import React from "react";
import BorderCard from "../common/BorderCard";

const Lander = (props) => {
    //Destructure Lander obj
    const {asdblanderID, landerPlatform, addbrovdiveID} = props.lander;

    const onSelect = () => {
        props.onSelect(asdblanderID);
    }

    return (
        <BorderCard className={props.className} onClick={onSelect}>
            <h2>ID: {asdblanderID}</h2>
            <div style={{flexDirection: "column"}}>
                <p>Platform ID: {landerPlatform}</p>
                <p>ROV Dive ID: {addbrovdiveID}</p>
            </div>
        </BorderCard>
    );
}

export default Lander;
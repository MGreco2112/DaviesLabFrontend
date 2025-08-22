import React from "react";
import BorderCard from "../common/BorderCard";

const Lander = (props) => {
    
    //Destructure Lander obj
    const {asdblanderID, landerPlatform, addbrovdiveID, deploymentDate, recoveryDate} = props.lander;

    const onSelect = () => {
        props.onSelect(asdblanderID);
    }

    return (
        <BorderCard className={props.className} onClick={onSelect}>
            <h2>ID: {asdblanderID}</h2>
            <div style={{flexDirection: "column"}}>
                {
                    landerPlatform
                    ?
                    <p>Platform ID: {landerPlatform}</p>
                    :
                    null
                }
                {
                    addbrovdiveID
                    ?
                    <p>ROV Dive ID: {addbrovdiveID}</p>
                    :
                    null
                }
                {
                    deploymentDate
                    ?
                    <p>Deployment Date: {new Date(deploymentDate).toDateString()}</p>
                    :
                    null
                }
                {
                    recoveryDate
                    ?
                    <p>Recovery Date: {new Date(recoveryDate).toDateString()}</p>
                    :
                    null
                }
            </div>
        </BorderCard>
    );
}

export default Lander;
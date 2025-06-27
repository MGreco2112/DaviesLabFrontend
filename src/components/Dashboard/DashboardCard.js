import React from "react";
import BorderCard from "../common/BorderCard";

const DashboardCard = (props) => {
    const {landerSetCount, totalDataPoints, totalAlignedDataPoints} = props.dashboard;

    return (
        <BorderCard id={props.id}>
            <p><strong>Total Landers: {landerSetCount}</strong></p>
            <p><strong>Total Data Points: {totalDataPoints}</strong></p>
            <p><strong>Total Aligned Data Points: {totalAlignedDataPoints}</strong></p>
        </BorderCard>
    );
}

export default DashboardCard;
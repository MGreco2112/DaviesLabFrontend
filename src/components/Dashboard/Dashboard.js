import React, {useState, useEffect} from "react";
import axios from "axios";
import Container from "../common/Container";
import "./Dashboard.css";
import { apiHostURL } from "../../config";
import Chart from "chart.js/auto";

const Dashboard = () => {
    const [pageState, setPageState] = useState({
        loading: true,
        dashboardObj: {}
    });

    useEffect(() => {
        const _getDashboard = async () => {
            try {
                const res =  await axios.get(`${apiHostURL}/api/dashboard/populate`);

                setPageState({
                    ...pageState,
                    loading: false,
                    dashboardObj: res.data
                });
            } catch (err) {
                console.error(err.message ? err.message : err.response);
            }
        }
        _getDashboard();
    }, []);


    const createChart = () => {
        const container = document.getElementById("dashboardContainer");
        const canvas = document.createElement('canvas');
        canvas.id = "dashboardCanvas";

        const chartData = {
            type: 'pie',
            data: {
                datasets: [{
                    label: "Data Points",
                    data: [pageState.dashboardObj.totalDataPoints, pageState.dashboardObj.totalAlignedDataPoints],
                    hoverOffset: 4
                }]
            }
        }

        new Chart(canvas, chartData);

        container.appendChild(canvas);
    }

    return (
        <Container id="dashboardContainer">
            {
                pageState.loading
                ?
                <h1>Fetching Dashboard...</h1>
                :
                    document.getElementById("dashboardCanvas")
                    ?
                    null
                    :
                    createChart()
            }
        </Container>
    );
}

export default Dashboard;
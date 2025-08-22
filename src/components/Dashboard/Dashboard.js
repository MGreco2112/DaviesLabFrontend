import React, {useState, useEffect} from "react";
import axios from "axios";
import Container from "../common/Container";
import "./Dashboard.css";
import { apiHostURL } from "../../config";
import Chart from "chart.js/auto";
import DashboardCard from "./DashboardCard";
import Splash from "../common/Splash.js";

const Dashboard = () => {
    const [pageState, setPageState] = useState({
        loading: true,
        dataPointObj: {},
        dateCountList: {}
    });

    useEffect(() => {
        const _getDashboard = async () => {
            try {
                const res = await axios.get(`${apiHostURL}/api/dashboard/populate`);

                setPageState({
                    ...pageState,
                    loading: false,
                    dataPointObj: res.data.dashboard,
                    dateCountList: res.data.pointsPerYear
                });
                
            } catch (err) {
                console.error(err.message ? err.message : err.response);
            }
        }
        _getDashboard();
    }, []);


    const createdataPointChart = () => {
        const container = document.getElementById("ChartsContainer");
        const canvas = document.createElement('canvas');
        const dateCanvas = document.createElement('canvas');
        canvas.id = "dashboardCanvas";
        dateCanvas.id = "dateDashboardCanvas";

        const dataPointChartData = {
            type: 'pie',
            data: {
                datasets: [{
                    label: "Data Points",
                    data: [pageState.dataPointObj.totalDataPoints, pageState.dataPointObj.totalAlignedDataPoints],
                    hoverOffset: 4
                }]
            },
            options: {
                plugins: {
                    legend: {
                        title: {
                            text: "Data Points:",
                            display: true,
                            font: {
                                size: 25
                            }
                        }
                    }
                }
            }
        }

        const dateChartData = {
            type: 'line',
            data: {
                labels: Object.keys(pageState.dateCountList),
                datasets: [{
                    label: Object.keys(pageState.dateCountList),
                    data: Object.values(pageState.dateCountList).map(val => val)
                }]
            }, 
            options: {
                plugins: {
                    legend: {
                        title: {
                            text: "Data Per Year:",
                            display: true,
                            font: {
                                size: 25
                            }
                        }
                    }
                }
            }
        }


        const dataPointChart = new Chart(canvas, dataPointChartData);

        dataPointChart.id = "piedataPointChart"

        const dateChart = new Chart(dateCanvas, dateChartData);

        dateChart.id = "lineDateChart";

        container.appendChild(canvas);
        container.appendChild(dateCanvas);
    }

    return (
        <Container id="dashboardContainer">
            <Container id="dashboardChartContainer">
                <h1>Database Dashboard</h1>
                <div
                    id="ChartsContainer"
                >
                    {
                        pageState.loading
                        ?
                        <h1>Fetching Dashboard...</h1>
                        :
                            document.getElementById("dashboardCanvas")
                            ?
                            null
                            :
                            createdataPointChart()
                    }
                </div>
            </Container>
            <Container id="dashcardContainer">
                {
                    pageState.loading
                    ?
                    <Container/>
                    :
                    <DashboardCard id="dashCard" dashboard={pageState.dataPointObj}/>
                }
            </Container>
            <Splash id="LanderSplash"/>
        </Container>
    );
}

export default Dashboard;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiHostURL } from "../../config";
import Container from "../common/Container";
import DOHeadData from "./DOHeadData";
import CTDHeadData from "./CTDHeadData";
import FLNTUHeadData from "./FLNTUHeadData";
import Chart from "chart.js/auto";
import axios from "axios";
import "./Data.css";


const DisplayData = () => {
    const params = useParams();

    const [head, setHead] = useState({});
    const [data, setData] = useState([]);
    const [chartExists, setChartExists] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const _fetchHead = async () => {
            try {
                const res = await axios.get(`${apiHostURL}/api/processed/${params.headType}/headers/sanitized/${params.headId}`);

                setHead(res.data);
            } catch (err) {
                console.error(err.response ? err.response : err.message);
            }
        }

        const _fetchData = async () => {
            try {
                const res = await axios.get(`${apiHostURL}/api/processed/${params.headType}/data/headId/${params.headId}`);

                setData(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err.message ? err.message : err.response);
            }
        }

        setLoading(true);
        _fetchHead();
        _fetchData();
    }, [head.headId]);

    const formatPage = () => {
        let headInfo = <h1>Unable To Load Header</h1>

        const buttonProps = {
            enabled: true,
            buttonDisabled: chartExists,
            buttonId: "DataButton",
            onClick: createTable,
            buttonText: "Show Chart"
        }

        if (params.headType === "ctd") {
            headInfo = <CTDHeadData header={head} id="PageContainer" button={buttonProps}/>
        } else if (params.headType === "do") {
            headInfo = <DOHeadData header={head} id="PageContainer" button={buttonProps}/>
        } else if (params.headType === "flntu") {
            headInfo = <FLNTUHeadData header={head} id="PageContainer" button={buttonProps}/>
        }


        return (
            <Container>
                {headInfo}
            </Container>
        );

    }

    const createTable = () => {
        //TODO: Create Menu System to allow elements to be added/removed from Chart dynamically via User Input
            //move chartData Object to top of page
            //create Form element to house the menu system
            //dropdown menu with Object.keys() for any given element within the data[]
            //once selected, create new Object with props:
                //label: ${dropdown value},
                //data: data.map(row => row.${dropdown value})
            //push new Object into datasets[] of chartData Object
        
        //TODO: Create Menu to allow User to determine type of chart created

        //place main page Container into variable to append elements to it
        const container = document.getElementById("PageContainer");
        //create Canvas element to hold new Chart once instantiated
        const canvas = document.createElement("canvas");

        let chartData = {
            //type of chart
                //options: bar, bubble, doughnut, pie, line (current), polarArea, radar, scatter
            type: 'line',
            //data obj, contains properties for filling chart
            data: {
                //labels the bottom of chart
                labels: data.map(row => row.date),
                //array of objects for populating the chart
                datasets:  [
                    {
                        //names the data
                        label: "Temp Degrees (C)",
                        //pulls the data into chart
                        data: data.map(row => row.tempDegC)
                    }
                ]
            }
        }

        //instantiates new Chart object
            //arg1: element into which Chart is placed
            //arg2: Data Object for Chart Definition
        new Chart(canvas, chartData);

        //set ID of canvas element for CSS purposes
        canvas.id="SensorChart";
        //flip boolean flag, used to disable button that renders chart
        setChartExists(true);
        //add chart canvas to element on page
        container.appendChild(canvas);
    }
    

    return (
        <Container>
            {
                loading
                ?
                <h1>Fetching Data...</h1>
                :
                formatPage()
            }
        </Container>
    );
}

export default DisplayData;
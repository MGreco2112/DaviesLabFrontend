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
    const [dataNames, setDataNames] = useState([]);
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
                console.table(res.data);
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

        const formProps = {
            enabled: !chartExists,
            onSubmit: createChart,
            setOuterArr: setDataNames
        }

        if (params.headType === "ctd") {
            headInfo = <CTDHeadData header={head} id="PageContainer" form={formProps}/>
        } else if (params.headType === "do") {
            headInfo = <DOHeadData header={head} id="PageContainer" form={formProps}/>
        } else if (params.headType === "flntu") {
            headInfo = <FLNTUHeadData header={head} id="PageContainer" form={formProps}/>
        }


        return (
            <Container>
                {headInfo}
            </Container>
        );

    }

    const createChart = () => {
        //place main page Container into variable to append elements to it
        const container = document.getElementById("PageContainer");
        //create Canvas element to hold new Chart once instantiated
        const canvas = document.createElement("canvas");
        
        //initialize chartData obj to hold configuration for Chart obj
        const chartData = {
            //set type to line for line chart
            type: 'line',
            //data obj to contain data within chart
            data: {
                //label property for labels on bottom of chart
                labels: data.map(row => row.date),
                //datasets array to hold each dataset to be displayed within chart
                    //this is initialized to empty, as contents are generated via user interaction with Form
                datasets: []
            }
        }

        //iterate through dataNames arr, holding objects sent back from the Form
        for (let i = 0; i < dataNames.length; i++) {
            //create temporary Object to format data for datasets arr
            const tempDataSetObj = {
                //label for dataset name
                label: dataNames[i].label,
                //map data in data object by the value of the checkbox selected by the User in the form
                data: data.map(row => row[dataNames[i].data])
            }

            //push each temp obj into the datasets array of the data object inside the chartData object
            chartData.data.datasets.push(tempDataSetObj);
        }

        //craete new Chart object inside the canvas element using the chartData object to populate Chart data
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
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
            buttonText: "Show Data"
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
        //TODO: Create Menu to allow User to determine type of chart created
        const container = document.getElementById("PageContainer");
        const canvas = document.createElement("canvas");

        let chartData = {
            type: 'line',
            data: {
                labels: data.map(row => row.date),
                datasets:  [
                    {
                        label: "Temp Degrees (C)",
                        data: data.map(row => row.tempDegC)
                    }
                ]
            }
        }

        new Chart(canvas, chartData);

        canvas.id="SensorChart";
        setChartExists(true);
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
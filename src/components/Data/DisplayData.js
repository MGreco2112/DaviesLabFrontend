import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { apiHostURL } from "../../config";
import Container from "../common/Container";
import Button from "react-bootstrap/Button";
import DOHeadData from "./DOHeadData";
import CTDHeadData from "./CTDHeadData";
import FLNTUHeadData from "./FLNTUHeadData";
import Chart from "chart.js/auto";
import axios from "axios";
import "./Data.css";
import ALBEXHeadData from "./ALBEXHeadData";
import ADCPHeadData from "./ADCPHeadData";
import Splash from "../common/Splash";


const DisplayData = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [pageState, setPageState] = useState({
        chartExists: false,
        head: {},
        loading: true
    });

    useEffect(() => {

        const _checkCache = async () => {
            const cacheName = "site-cache";
            const cache = await caches.open(cacheName);

            const requestURL = `${apiHostURL}/api/cache/${params.headType}/headers`;

            const cachedResponse = await cache.match(requestURL);

            if (cachedResponse) {

                const data = await cachedResponse.json();
                
                const today = new Date();
                const [thisMonth, thisDay, thisYear] = [
                    today.getMonth(),
                    today.getDate(),
                    today.getFullYear()
                ]
                const cacheDate = new Date(data.cacheDate);
                const [cacheMonth, cacheDay, cacheYear] = [
                    cacheDate.getMonth(),
                    cacheDate.getDate(),
                    cacheDate.getFullYear()
                ];
                

                if (thisDay <= cacheDay && thisMonth <= cacheMonth && thisYear <= cacheYear) {

                    if (data.heads[params.headId]) {
                        console.log("Loaded data from Cache");
                        
                        setPageState({
                            ...pageState,
                            head: await data.heads[params.headId],
                            loading: false
                        });
                    } else {
                        console.log("API Fetch");
                        
                        _fetchHead();
                    }

                } else {
                    console.log("API Fetch");
                    
                    _fetchHead();
                    return;
                    
                }

            } else {
                
                _fetchHead();
            }
        }

        const _fetchHead = async () => {
            try {
                console.log("Calling Backend");
                
                const res = await axios.get(`${apiHostURL}/api/processed/${params.headType}/headers/sanitized/${params.headId}`);
                
                setPageState({
                    ...pageState,
                    head: res.data,
                    loading: false
                });

            } catch (err) {
                console.error(err.response ? err.response : err.message);

                setPageState({
                    ...pageState,
                    loading: false
                });
            }
        }

        setPageState({
            ...pageState,
            loading: true
        });

        _checkCache();
     }, [pageState.head.headId, params.headId, params.headType]);

    const returnToLander = () => {
        navigate(`/landers/${pageState.head.landerID}`);
    }

    const formatPage = () => {
        let headInfo = <h1>Unable To Load Header</h1>

        const formProps = {
            enabled: !pageState.chartExists,
            onSubmit: onFormSubmit,
            csvButtonFunct: createCSVButton
        }

        if (params.headType === "ctd") {
            headInfo = <CTDHeadData header={pageState.head} id="PageContainer" form={formProps}/>
        } else if (params.headType === "do") {
            headInfo = <DOHeadData header={pageState.head} id="PageContainer" form={formProps}/>
        } else if (params.headType === "flntu") {
            headInfo = <FLNTUHeadData header={pageState.head} id="PageContainer" form={formProps}/>
        } else if (params.headType === "albex_ctd") {
            headInfo = <ALBEXHeadData header={pageState.head} id="PageContainer" form={formProps}/>
        } else if (params.headType === "adcp") {
            headInfo = <ADCPHeadData header={pageState.head} id="PageContainer" form={formProps}/>
        }


        return (
            <Container id="FormatPageContainer">
                <Button id="LanderButton" onClick={returnToLander}>Return to Lander</Button>
                {headInfo}
                <Splash id="LanderSplash"/>
            </Container>
        );

    }

    const fetchDataRange = async () => {
        let startDate = document.getElementById("startDateInput").value;
        let endDate = document.getElementById("endDateInput").value;        
        
        if (startDate === "" && pageState.head.startTime !== null) {
            startDate = pageState.head.startTime;
        }

        if (endDate === "" && pageState.head.endTime !== null) {
            endDate = pageState.head.endTime;
        }
        

        console.log(startDate, endDate);

        
        if (startDate !== undefined || endDate !== undefined) {

            document.getElementById("SubmitButton").disabled = true;
            document.getElementById("SubmitButton").innerText = "Loading Chart";
            
            const _getData = async () => {
                try {
                    const res = await axios.get(`${apiHostURL}/api/processed/${params.headType}/` + 
                `${params.headType === "ctd" || params.headType === "adcp" ? "aligned_data": "data"}` + 
                `/headId/${pageState.head.headID}/startDate/${startDate}/endDate/${endDate}`);

                    console.log(res.data);

                    return res.data;
                } catch (err) {
                    console.error(err.response ? err.response : err.message);
                    document.getElementById("SubmitButton").disabled = false;
                    document.getElementById("SubmitButton").innerText = "Create Chart";
                }
            }

            const populateFromCache = () => {
                const outputArr = [];

                for (let i = 0; i < pageState.head.data.length; i++) {
                    const dataElement = pageState.head.data[i];
                    if (dataElement.date >= (startDate + "T00:00:00") && dataElement.date <= (endDate + "T00:00:00")) {
                        outputArr.push(dataElement);
                    }
                }

                return outputArr;
            }

            if (pageState.head.data.length > 0) {
                console.log("Built from Cache");
                return populateFromCache();
            } else {
                console.log("Built from API");
                return await _getData();
            }
        } else {
            alert("Invalid Date Range Entered");
        }
        
    }

    const buildDataNames = () => {
        const dataButtons = document.getElementsByClassName("dataCheckbox");
        const dataValues = [];

        for (let i = 0; i < dataButtons.length; i++) {
            if (dataButtons[i].checked) {
                const tempObj = {
                    label: dataButtons[i].name,
                    data: dataButtons[i].value
                }

                dataValues.push(tempObj);
            }
        }

        return dataValues;
    }

    const onFormSubmit = async () => {

        const dataValues = buildDataNames();
        const dataSet = await fetchDataRange();
        

        if (dataValues.length > 0) {
            
            if (dataSet && dataSet.length > 0) {
                
                createChart(dataValues, dataSet);
            } else {
                document.getElementById("SubmitButton").disabled = false;
                document.getElementById("SubmitButton").innerText = "Create Chart";
                alert("No Data Returned");
            }
        } else {
            document.getElementById("SubmitButton").disabled = false;
            document.getElementById("SubmitButton").innerText = "Create Chart";
            alert("ERROR: No Selection Made");
        }
    }

    const createChart = (dataValues, dataSet) => {
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
                labels: dataSet.map(row => row.date),
                //datasets array to hold each dataset to be displayed within chart
                    //this is initialized to empty, as contents are generated via user interaction with Form
                datasets: []
            }
        }

        //iterate through dataValues arr, holding objects sent back from the Form
        for (let i = 0; i < dataValues.length; i++) {
            //create temporary Object to format data for datasets arr
            const tempDataSetObj = {
                //label for dataset name
                label: dataValues[i].label,
                //map data in data object by the value of the checkbox selected by the User in the form
                data: dataSet.map(row => row[dataValues[i].data])
            }

            //push each temp obj into the datasets array of the data object inside the chartData object
            chartData.data.datasets.push(tempDataSetObj);
        }

        //craete new Chart object inside the canvas element using the chartData object to populate Chart data
        new Chart(canvas, chartData);

        //set ID of canvas element for CSS purposes
        canvas.id="SensorChart";
        //flip boolean flag, used to disable button that renders chart
        setPageState({
            ...pageState,
            chartExists: true
        });
        //add chart canvas to element on page
        container.appendChild(canvas);
        //call function to generate both .csv file and download link
        createCSV(dataSet);

        _populateCache(`${apiHostURL}/api/cache/${params.headType}/headers`);
    }

    const createCSVButton = async () => {
        try {
            document.getElementById("CsvButton").innerText = "Creating CSV...";
            document.getElementById("CsvButton").disabled = true;

            let url = `${apiHostURL}/api/processed/${params.headType}/data`;

            if (params.headType === "ctd" || params.headType === "adcp") {
                url += `/header/${params.headId}/aligned/true`
            } else {
                url += `/headId/${params.headId}`
            }

            const res = await axios.get(url);

            createCSV(res.data);

            document.getElementById("CsvButton").innerText = "Finished CSV";
        } catch (err) {
            document.getElementById("CsvButton").disabled = false;
            document.getElementById("CsvButton").innerText = "Error Creating CSV"
            console.error(err.message ? err.message : err.response);
        }
    }

    const createCSV = (data) => {

        const titleKeys = Object.keys(data[0]);
        const exportData = [];

        exportData.push(titleKeys);

        data.forEach(dataPoint => {
            exportData.push(Object.values(dataPoint))
        });

        let csvContent = '';

        exportData.forEach(dataPoint => {
            csvContent += dataPoint.join(",") + "\n"
        });

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' })
        const objUrl = URL.createObjectURL(blob)

        const link = document.createElement('a')
        link.setAttribute('href', objUrl)
        link.setAttribute('download', `${pageState.head.landerID}_${params.headType}.csv`)
        link.textContent = 'Click to Download .CSV'

        document.getElementById("PageContainer").append(link);
    }

    const _populateCache = async (url) => {
        console.log("Populating Cache");

        await caches.open("site-cache").then(async (cache) => {
            await cache
                .add(url)
                .then(() => console.log("Data added to cache"))
                .catch((error) => console.error("Error adding data to cache:", error))
        });
    }
    

    return (
        <Container id="DataPageContainer">
            {
                pageState.loading
                ?
                <Container id="FetchingMessageContainer">
                    <h1>Fetching Data...</h1>
                </Container>
                :
                formatPage()
                
            }
        </Container>
    );
}

export default DisplayData;
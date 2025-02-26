import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiHostURL } from "../../config";
import BorderCard from "../common/BorderCard";
import Container from "../common/Container";

const DisplayDOHead = () => {
    const params = useParams();

    const [doHead, setDoHead] = useState({
        headID: params.id
    });
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const _fetchDoHead = async () => {
            try {
                const res = await axios.get(`${apiHostURL}/api/processed/do/headers/${doHead.headID}`);

                setDoHead(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err.response ? err.response : err.message);
                
            }
        }

        setLoading(true);
        _fetchDoHead();
    }, [doHead.headID]);
    
    const formatPage = () => {
        return (
            <Container>
                <BorderCard>
                    {/* 
                        private String SondeName;
                        private String SondeNo;
                        private String SensorType;
                        private Integer Channel;
                        private Integer DelayTime;
                        private Integer PreHeat;
                        private Integer MeasModel;
                        private Integer BurstTime;
                        private Integer BurstCnt;
                        private Integer IntervalData;
                        private Integer SampleCnt;
                        private String StartTime, EndTime;
                        private Double DepAdiRho;
                        private String CoefDate;
                        private Double Ch1;
                        private Double Ch2;
                        private Double Ch3;
                        private Integer BuzzerEN;
                        private Integer BuzzerInterval;
                        private String COMMENT;
                        private String SensorType2;
                        private Integer BuzzerNumber;
                        private Integer DepM;
                        private Integer SetSal;
                        private String FilmNo;
                    */}
                </BorderCard>
            </Container>
        )
    }

    return(
        <h1>Display DO Head</h1>
    );
}

export default DisplayDOHead;
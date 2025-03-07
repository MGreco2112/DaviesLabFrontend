import React from "react";
import {Route, Routes} from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Home from "../Home/Home";
import Landers from "../landers/Landers";
import DisplayLander from "../landers/DisplayLander";
import DisplayData from "../Data/DisplayData";
// import new routes here

const AppRouter = () => {
    return (
        <div style={{width: "100%", flexDirection: "column"}}>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/landers" element={<Landers/>}/>
            <Route path="/landers/:id" element={<DisplayLander/>}/>
            <Route path="/landers/data/:headType/:headId" element={<DisplayData/>}/>
        </Routes>
    </div>
    )
}

export default AppRouter;
import {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./home/Home";
import Sensors from "./questions/Sensors";
import DataSheet from "./DataSheet";

export default function App () {


    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Sensors" element={<Sensors />} />
                <Route path="/Sensors/DataSheet/:code" element={<DataSheet />}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}
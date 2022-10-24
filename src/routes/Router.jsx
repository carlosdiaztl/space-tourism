import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Login from "../components/mainvuelos/Login";
import Home from "../components/home/Home";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                    <Route path='vuelos' element={<Home/>}>
                    </Route>
                <Route path="*" />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
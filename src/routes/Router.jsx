import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "../components/home/Home";
import Notfound from "../noSearch/Notfound";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                    
                <Route path="*" element={<Notfound/>}  />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
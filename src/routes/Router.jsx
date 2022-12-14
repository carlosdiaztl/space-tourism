import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Crew from "../crew/Crew";
import Destination from "../destinations/Destination";
import Notfound from "../noSearch/Notfound";
import Technology from "../technology/Technology";
import Hhome from "../../src/components/elhome/Hhome";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="home" element={<Hhome/>} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology/>} />
        <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

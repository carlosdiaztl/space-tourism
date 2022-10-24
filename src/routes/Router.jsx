import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hhome from "../components/elhome/Hhome";
import Home from "../components/home/Home";
import Crew from "../crew/Crew";
import Destination from "../destinations/Destination";
import Notfound from "../noSearch/Notfound";
import Tech from "../technology/Tech";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="home" element={<Hhome/>} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Tech/>} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

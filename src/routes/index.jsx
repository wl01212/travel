import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Place from "../pages/Place";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Schedule from "../pages/Schedule";
import MapPage from "../pages/MapPage";
import Favorite from "../pages/Favorite";
// import OtherPage from "./pages/OtherPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="places/id/:placeId" element={<Place />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/map" element={<MapPage />} />
      {/* <Route path="/" element={<OtherPage />} /> */}
    </Route>
  )
);

export default router;

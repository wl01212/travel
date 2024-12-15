//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Place from "./pages/Place";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Schedule from "./pages/Schedule";
import NavigationButton from './components/NavigationButton/NavigationButton';
// import MapPage from './pages/MapPage';
// import OtherPage from './pages/OtherPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="places/id/:placeId" element={<Place />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/schedule" element={<Schedule />} />
        {/* <Route path="/map" element={<MapPage />} /> */}
        {/* <Route path="/" element={<OtherPage />} /> */}
      </Routes>
      <NavigationButton /> 
    </BrowserRouter>
  );
}

export default App;

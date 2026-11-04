import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Bmi from "../Bmi.jsx";
import "./App.css";
function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Bmi/>} />
    </Routes>
    </>
  )
}

export default App
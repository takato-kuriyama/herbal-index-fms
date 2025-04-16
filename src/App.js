// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import SlotAssignment from "./pages/SlotAssignment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="slot-assignment" element={<SlotAssignment />} />
          {/* 他のルートをここに追加 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import SlotAssignment from "./pages/SlotAssignment";
// Import placeholder components for new routes
import ProductionPlanning from "./pages/PlaceholderPages";
import ManufacturingInstructions from "./pages/PlaceholderPages";
import ManufacturingResults from "./pages/PlaceholderPages";
// Import new shipping instructions pages
import ShippingInstructionsList from "./pages/ShippingInstructionsList";
import ShippingInstructionDetail from "./pages/ShippingInstructionDetail";
import Inventory from "./pages/PlaceholderPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="slot-assignment" element={<SlotAssignment />} />
          <Route
            path="production-planning"
            element={<ProductionPlanning pageName="生産計画" />}
          />
          <Route
            path="manufacturing-instructions"
            element={<ManufacturingInstructions pageName="製造指示一覧" />}
          />
          <Route
            path="manufacturing-results"
            element={<ManufacturingResults pageName="製造実績一覧" />}
          />
          {/* 出荷指示関連ルートの更新 */}
          <Route path="shipping-instructions">
            <Route index element={<ShippingInstructionsList />} />
            <Route path=":id" element={<ShippingInstructionDetail />} />
          </Route>
          <Route path="inventory" element={<Inventory pageName="在庫一覧" />} />
          {/* 他のルートをここに追加 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

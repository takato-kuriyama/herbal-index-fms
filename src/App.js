// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import SlotAssignment from "./pages/SlotAssignment";
import Login from "./pages/Login";
import PrivateRoute from "./components/common/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";

// Import placeholder components for routes
import ProductionPlanning from "./pages/PlaceholderPages";
import {
  ManufacturingInstructions,
  ManufacturingResults,
  Inventory,
} from "./pages/PlaceholderPages";

// Import shipping instructions pages
import ShippingInstructionsList from "./pages/ShippingInstructionsList";
import ShippingInstructionDetail from "./pages/ShippingInstructionDetail";

// Login情報
// demo@herbal.example.com
// password

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* 認証が不要なルート */}
          <Route path="/login" element={<Login />} />

          {/* 認証が必要なルート */}
          <Route element={<PrivateRoute />}>
            <Route element={<Layout />}>
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
              {/* 出荷指示関連ルート */}
              <Route path="shipping-instructions">
                <Route index element={<ShippingInstructionsList />} />
                <Route path=":id" element={<ShippingInstructionDetail />} />
              </Route>
              <Route
                path="inventory"
                element={<Inventory pageName="在庫一覧" />}
              />
            </Route>
          </Route>

          {/* その他のURLはログインページまたはダッシュボードにリダイレクト */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import AlertNotification from "../components/dashboard/AlertNotification";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import MenuGrid from "../components/dashboard/MenuGrid";
import MaterialConsumptionChart from "../components/dashboard/MaterialConsumptionChart";
import MaterialDetailTable from "../components/dashboard/MaterialDetailTable";
import TaskManager from "../components/dashboard/TaskManager";

const Dashboard = () => {
  // アラート状態
  const [showAlert, setShowAlert] = useState(true);

  // メモの状態
  const [memo, setMemo] = useState(localStorage.getItem("dashboardMemo") || "");

  // メモの保存
  useEffect(() => {
    localStorage.setItem("dashboardMemo", memo);
  }, [memo]);

  // アラートを閉じる
  const closeAlert = () => {
    setShowAlert(false);
  };

  // 材料消費量データ
  const materialConsumptionData = [
    { name: "ラベンダー", value: 1200, color: "#7F7CFF", percent: "17%" },
    { name: "ローズマリー", value: 900, color: "#82D9CA", percent: "13%" },
    { name: "レモングラス", value: 850, color: "#91F086", percent: "12%" },
    { name: "シダーウッド", value: 750, color: "#A0D568", percent: "11%" },
    { name: "ティーツリー", value: 700, color: "#8DD1E1", percent: "10%" },
    { name: "オレンジスイート", value: 650, color: "#A9E05C", percent: "9%" },
    { name: "ユーカリ", value: 600, color: "#FFD159", percent: "9%" },
    { name: "ペパーミント", value: 550, color: "#FF9D5C", percent: "8%" },
    { name: "ベルガモット", value: 500, color: "#FF6361", percent: "7%" },
  ];

  // 材料消費量詳細データ
  const materialDetailData = [
    {
      id: 1,
      name: "ラベンダーエッセンシャルオイル",
      consumption: "1200ml",
      stock: "3450ml",
      reorderPoint: "1000ml",
      supplier: "ハーバルライフ社",
      lastOrder: "2025-04-02",
    },
    {
      id: 2,
      name: "ローズマリーエッセンシャルオイル",
      consumption: "900ml",
      stock: "2800ml",
      reorderPoint: "800ml",
      supplier: "ナチュラルエッセンス社",
      lastOrder: "2025-03-28",
    },
    {
      id: 3,
      name: "レモングラス",
      consumption: "850ml",
      stock: "1250ml",
      reorderPoint: "1000ml",
      supplier: "ハーバルライフ社",
      lastOrder: "2025-04-10",
    },
    {
      id: 4,
      name: "シダーウッド",
      consumption: "750ml",
      stock: "1900ml",
      reorderPoint: "700ml",
      supplier: "ウッディアロマ社",
      lastOrder: "2025-03-15",
    },
    {
      id: 5,
      name: "ティーツリー",
      consumption: "700ml",
      stock: "950ml",
      reorderPoint: "800ml",
      supplier: "オーストラリアンボタニカル",
      lastOrder: "2025-04-05",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 py-6 flex-grow">
        {/* アラート */}
        {showAlert && (
          <AlertNotification
            message="安全在庫数を下回っている在庫があります。ティーツリー (950ml)が不足しています。"
            onClose={closeAlert}
          />
        )}

        {/* 上部グリッド - ロゴ、時計、メモ */}
        <DashboardHeader memo={memo} setMemo={setMemo} />

        {/* メインメニューグリッド */}
        <MenuGrid />

        {/* 下部グリッド - 材料消費量グラフ、詳細表、タスク */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 材料消費量ランキング（円グラフ） */}
          <MaterialConsumptionChart data={materialConsumptionData} />

          {/* 材料消費量ランキング（詳細表） */}
          <MaterialDetailTable data={materialDetailData} />

          {/* クイックメモ・タスク */}
          <TaskManager />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

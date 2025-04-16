import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const Dashboard = () => {
  // 現在時刻の状態
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showAlert, setShowAlert] = useState(true);
  const [memo, setMemo] = useState(localStorage.getItem("dashboardMemo") || "");
  const [quickTasks, setQuickTasks] = useState(
    JSON.parse(localStorage.getItem("quickTasks") || "[]")
  );
  const [newTask, setNewTask] = useState("");

  // メインメニュー項目
  const mainMenuItems = [
    {
      id: 1,
      title: "スロット割り当て",
      color: "bg-teal-100",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
      path: "/slot-assignment",
    },
    {
      id: 2,
      title: "生産計画",
      color: "bg-emerald-100",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      path: "/production-planning",
    },
    {
      id: 3,
      title: "製造指示一覧",
      color: "bg-blue-100",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      path: "/manufacturing-instructions",
    },
    {
      id: 4,
      title: "製造実績一覧",
      color: "bg-indigo-100",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      path: "/manufacturing-results",
    },
    {
      id: 5,
      title: "出荷指示一覧",
      color: "bg-purple-100",
      icon: "M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20",
      path: "/shipping-instructions",
    },
    {
      id: 6,
      title: "在庫一覧",
      color: "bg-fuchsia-100",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
      path: "/inventory",
    },
  ];

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

  // 材料消費量詳細データ - より詳細な情報を含む
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

  // 1秒ごとに現在時刻を更新
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // メモの保存
  useEffect(() => {
    localStorage.setItem("dashboardMemo", memo);
  }, [memo]);

  // タスクの保存
  useEffect(() => {
    localStorage.setItem("quickTasks", JSON.stringify(quickTasks));
  }, [quickTasks]);

  // 日付をフォーマット
  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("ja-JP", options);
  };

  // 時刻をフォーマット
  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  // アラートを閉じる
  const closeAlert = () => {
    setShowAlert(false);
  };

  // 新しいタスクを追加
  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setQuickTasks([
        ...quickTasks,
        { id: Date.now(), text: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  // タスクの完了状態を切り替え
  const toggleTaskComplete = (id) => {
    setQuickTasks(
      quickTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // タスクを削除
  const deleteTask = (id) => {
    setQuickTasks(quickTasks.filter((task) => task.id !== id));
  };

  // カスタムツールチップ
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-md rounded">
          <p className="font-semibold">{payload[0].name}</p>
          <p className="text-sm">
            消費量: <span className="font-medium">{payload[0].value}ml</span>
          </p>
        </div>
      );
    }
    return null;
  };

  // カスタムラベル
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    name,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius * 1.15;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill={materialConsumptionData[index].color}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize="12"
        fontWeight="bold"
      >
        {name}
      </text>
    );
  };

  // レジェンドを非表示
  const renderLegend = () => {
    return null;
  };

  // メニュー項目をレンダリングする関数（リンクなし）
  const renderMenuItem = (item) => (
    <div
      key={item.id}
      className={`${item.color} rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100 h-full`}
    >
      <div className="p-4 flex flex-col items-center text-center">
        <svg
          className="w-8 h-8 text-gray-700 mb-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={item.icon}
          ></path>
        </svg>
        <h2 className="text-sm font-semibold text-gray-800">{item.title}</h2>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 py-6 flex-grow">
        {/* アラート */}
        {showAlert && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-md shadow-md flex items-center justify-between">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>
                安全在庫数を下回っている在庫があります。
                <span className="font-semibold ml-1">ティーツリー (950ml)</span>
                が不足しています。
              </span>
            </div>
            <button
              onClick={closeAlert}
              className="text-red-500 font-bold cursor-pointer hover:text-red-700 transition-colors flex items-center"
            >
              <span className="mr-1">確認</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        )}

        {/* 上部グリッド - ロゴ、時計、メモ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* FMSロゴ */}
          <div className="bg-gradient-to-br from-teal-500 to-emerald-700 rounded-lg shadow-lg p-6 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white tracking-wider mb-2">
                HERBAL INDEX
              </h1>
              <div className="text-lg text-white font-light">
                Factory Management System
              </div>
            </div>
          </div>

          {/* 現在時刻表示 */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-white">
            <div className="text-6xl font-bold mb-3">
              {formatTime(currentTime)}
            </div>
            <div className="text-lg">{formatDate(currentTime)}</div>
          </div>

          {/* メモエリア */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-700 mb-3 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                ></path>
              </svg>
              メモ
            </h2>
            <textarea
              className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="メモを入力してください..."
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
            ></textarea>
          </div>
        </div>

        {/* メインメニューグリッド */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {mainMenuItems.map((item) => (
            <Link to={item.path} key={item.id}>
              <div
                className={`${item.color} rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100 h-full`}
              >
                <div className="p-4 flex flex-col items-center text-center">
                  <svg
                    className="w-8 h-8 text-gray-700 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={item.icon}
                    ></path>
                  </svg>
                  <h2 className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 下部グリッド - 材料消費量グラフ、詳細表、タスク */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 材料消費量ランキング（円グラフ） */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
              材料消費量ランキング
            </h2>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={materialConsumptionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    labelLine={true}
                    label={renderCustomizedLabel}
                    isAnimationActive={true}
                  >
                    {materialConsumptionData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        stroke="none"
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend content={renderLegend} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap justify-center mt-3 gap-2">
              {materialConsumptionData.map((entry, index) => (
                <div
                  key={`legend-${index}`}
                  className="flex items-center text-sm"
                >
                  <div
                    style={{ backgroundColor: entry.color }}
                    className="w-3 h-3 mr-1 rounded-full"
                  />
                  <span className="text-gray-700">{entry.name}</span>
                  <span className="text-gray-500 ml-1">({entry.percent})</span>
                </div>
              ))}
            </div>
            <div className="text-xs text-gray-500 text-center mt-4">
              過去30日間の材料消費量データ
            </div>
          </div>

          {/* 材料消費量ランキング（詳細表） */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              材料消費量詳細
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left font-semibold text-gray-600">
                      材料名
                    </th>
                    <th className="px-4 py-2 text-center font-semibold text-gray-600">
                      消費量
                    </th>
                    <th className="px-4 py-2 text-center font-semibold text-gray-600">
                      在庫量
                    </th>
                    <th className="px-4 py-2 text-center font-semibold text-gray-600">
                      状態
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {materialDetailData.map((material) => {
                    // 在庫状態の判定
                    const stock = parseInt(material.stock);
                    const reorderPoint = parseInt(material.reorderPoint);
                    let statusColor = "bg-green-100 text-green-800";
                    let statusText = "良好";

                    if (stock < reorderPoint) {
                      statusColor = "bg-red-100 text-red-800";
                      statusText = "不足";
                    } else if (stock < reorderPoint * 1.2) {
                      statusColor = "bg-yellow-100 text-yellow-800";
                      statusText = "要注意";
                    }

                    return (
                      <tr key={material.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-800">
                          {material.name}
                        </td>
                        <td className="px-4 py-3 text-center text-gray-800">
                          {material.consumption}
                        </td>
                        <td className="px-4 py-3 text-center text-gray-800">
                          {material.stock}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span
                            className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${statusColor}`}
                          >
                            {statusText}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* クイックメモ・タスク */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                ></path>
              </svg>
              タスク
            </h2>
            <form onSubmit={addTask} className="mb-4 flex">
              <input
                type="text"
                className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="新しいタスクを追加..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 rounded-r-md transition-colors"
              >
                追加
              </button>
            </form>
            <div className="overflow-y-auto max-h-64">
              <ul className="space-y-2">
                {quickTasks.length === 0 ? (
                  <li className="text-gray-400 text-center py-2">
                    タスクがありません
                  </li>
                ) : (
                  quickTasks.map((task) => (
                    <li
                      key={task.id}
                      className="flex items-center justify-between p-2 border border-gray-200 rounded-md hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => toggleTaskComplete(task.id)}
                          className="h-4 w-4 text-purple-600 focus:ring-purple-500 rounded mr-2"
                        />
                        <span
                          className={
                            task.completed
                              ? "line-through text-gray-400"
                              : "text-gray-700"
                          }
                        >
                          {task.text}
                        </span>
                      </div>
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          ></path>
                        </svg>
                      </button>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

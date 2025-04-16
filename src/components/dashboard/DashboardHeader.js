import React, { useState, useEffect } from "react";

const DashboardHeader = ({ memo, setMemo }) => {
  // 現在時刻の状態
  const [currentTime, setCurrentTime] = useState(new Date());

  // 1秒ごとに現在時刻を更新
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

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

  return (
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
        <div className="text-6xl font-bold mb-3">{formatTime(currentTime)}</div>
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
  );
};

export default DashboardHeader;

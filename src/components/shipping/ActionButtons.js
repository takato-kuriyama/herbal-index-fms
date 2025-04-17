// src/components/shipping/ActionButtons.js
import React from "react";

const ActionButtons = ({ selectedCount }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-4">
      <button
        className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg flex items-center shadow-sm"
        onClick={() => console.log("出荷指示登録")}
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        出荷指示登録
      </button>

      <button
        className={`${
          selectedCount > 0
            ? "bg-red-500 hover:bg-red-600"
            : "bg-gray-300 cursor-not-allowed"
        } text-white font-medium py-2 px-4 rounded-lg flex items-center shadow-sm transition-colors`}
        disabled={selectedCount === 0}
        onClick={() => console.log("キャンセル")}
      >
        <svg
          className="w-4 h-4 mr-2"
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
        キャンセル
        {selectedCount > 0 && ` (${selectedCount}件)`}
      </button>

      <div className="flex-1"></div>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg flex items-center shadow-sm"
        onClick={() => console.log("ピッキングリスト")}
      >
        <svg
          className="w-4 h-4 mr-2"
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
        ピッキングリスト
      </button>

      <button
        className={`${
          selectedCount > 0
            ? "bg-purple-500 hover:bg-purple-600"
            : "bg-gray-300 cursor-not-allowed"
        } text-white font-medium py-2 px-4 rounded-lg flex items-center shadow-sm transition-colors`}
        disabled={selectedCount === 0}
        onClick={() => console.log("納品書印刷")}
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
          ></path>
        </svg>
        納品書印刷
        {selectedCount > 0 && ` (${selectedCount}件)`}
      </button>

      <button
        className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg flex items-center hover:bg-gray-50 shadow-sm"
        onClick={() => console.log("インポート")}
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          ></path>
        </svg>
        インポート
      </button>

      <button
        className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg flex items-center hover:bg-gray-50 shadow-sm"
        onClick={() => console.log("エクスポート")}
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          ></path>
        </svg>
        エクスポート
      </button>
    </div>
  );
};

export default ActionButtons;

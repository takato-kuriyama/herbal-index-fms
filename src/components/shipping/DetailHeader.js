// src/components/shipping/DetailHeader.js
import React from "react";

const DetailHeader = ({ title, shippingCode, status }) => {
  // ステータスに応じたバッジ表示
  const renderStatusBadge = (status) => {
    let bgColor = "";
    let icon = "";

    switch (status) {
      case "処理待ち":
        bgColor = "bg-yellow-100 text-yellow-800 border-yellow-200";
        icon = (
          <svg
            className="w-5 h-5 mr-1.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        );
        break;
      case "出荷完了":
        bgColor = "bg-green-100 text-green-800 border-green-200";
        icon = (
          <svg
            className="w-5 h-5 mr-1.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        );
        break;
      case "キャンセル":
        bgColor = "bg-red-100 text-red-800 border-red-200";
        icon = (
          <svg
            className="w-5 h-5 mr-1.5"
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
        );
        break;
      default:
        bgColor = "bg-gray-100 text-gray-800 border-gray-200";
        icon = null;
    }

    return (
      <div
        className={`flex items-center px-3 py-1.5 rounded border ${bgColor}`}
      >
        {icon}
        <span className="font-medium">{status}</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white rounded-lg shadow-lg p-6 mb-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
          <svg
            className="w-8 h-8 mr-3 text-teal-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
            ></path>
          </svg>
          {title}
        </h1>
        <p className="text-gray-600">
          出荷指示書番号: <span className="font-semibold">{shippingCode}</span>
        </p>
      </div>
    </div>
  );
};

export default DetailHeader;

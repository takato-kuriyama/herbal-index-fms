// src/components/HeaderMenu.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderMenu = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // メニュー項目の定義
  const menuItems = [
    {
      id: 1,
      title: "スロット割り当て",
      path: "/slot-assignment",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    },
    {
      id: 2,
      title: "生産計画",
      path: "/production-planning",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    },
    {
      id: 3,
      title: "製造指示一覧",
      path: "/manufacturing-instructions",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    },
    {
      id: 4,
      title: "製造実績一覧",
      path: "/manufacturing-results",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
      id: 5,
      title: "出荷指示一覧",
      path: "/shipping-instructions",
      icon: "M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20",
    },
    {
      id: 6,
      title: "在庫一覧",
      path: "/inventory",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    },
  ];

  // モバイルメニューの切り替え
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center">
      {/* デスクトップメニュー */}
      <div className="hidden md:flex space-x-1">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`px-3 py-2 rounded-lg flex items-center text-sm font-medium transition-colors ${
              location.pathname === item.path
                ? "bg-white bg-opacity-20 text-white"
                : "text-white hover:bg-white hover:bg-opacity-10"
            }`}
          >
            <svg
              className="w-5 h-5 mr-1"
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
            {item.title}
          </Link>
        ))}
      </div>

      {/* ユーザーアイコンとお知らせアイコン */}
      <div className="flex items-center ml-4 space-x-3">
        {/* お知らせアイコン */}
        <button className="relative p-1 text-white hover:bg-white hover:bg-opacity-10 rounded-full transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
          <span className="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2"></span>
        </button>

        {/* ユーザーアイコン */}
        <div className="relative">
          <button className="flex items-center text-white hover:bg-white hover:bg-opacity-10 rounded-full p-1 transition-colors">
            <div className="bg-white bg-opacity-20 rounded-full p-1">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </div>
          </button>
        </div>

        {/* モバイルメニューボタン */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:bg-white hover:bg-opacity-10 rounded-lg p-1 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-teal-600 mt-1 py-2 shadow-lg md:hidden z-50">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`px-4 py-2 flex items-center ${
                location.pathname === item.path
                  ? "bg-white bg-opacity-20 text-white"
                  : "text-white hover:bg-white hover:bg-opacity-10"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="w-5 h-5 mr-2"
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
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;

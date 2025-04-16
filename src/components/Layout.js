// src/components/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* ヘッダー */}
      <header className="bg-gradient-to-r from-teal-600 to-green-500 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              ></path>
            </svg>
            <div className="text-3xl font-bold tracking-wider">
              <span className="text-white">HERBAL</span>
              <span className="text-yellow-300 ml-1">INDEX</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* ヘッダーのアイコン */}
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <Outlet />

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-4 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>
            © 2025 HERBAL INDEX - Factory Management System. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

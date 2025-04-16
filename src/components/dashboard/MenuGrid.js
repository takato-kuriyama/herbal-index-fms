import React from "react";
import { Link } from "react-router-dom";

const MenuGrid = () => {
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

  return (
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
  );
};

export default MenuGrid;

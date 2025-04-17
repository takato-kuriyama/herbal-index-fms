// src/components/shipping/ShippingTable.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShippingTable = ({
  data,
  toggleCheckStatus,
  toggleAllCheckStatus,
  onViewDetail,
}) => {
  const navigate = useNavigate();
  const [sortField, setSortField] = useState("shippingScheduleDate");
  const [sortDirection, setSortDirection] = useState("desc");

  // ソート切り替え
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // ステータスに応じたバッジ表示
  const renderStatusBadge = (status) => {
    let bgColor = "";
    switch (status) {
      case "処理待ち":
        bgColor = "bg-yellow-100 text-yellow-800";
        break;
      case "出荷完了":
        bgColor = "bg-green-100 text-green-800";
        break;
      case "キャンセル":
        bgColor = "bg-red-100 text-red-800";
        break;
      default:
        bgColor = "bg-gray-100 text-gray-800";
    }

    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor}`}
      >
        {status}
      </span>
    );
  };

  // 出荷印刷ステータス表示
  const renderPrintStatus = (status) => {
    let textColor = "";
    switch (status) {
      case "済":
        textColor = "text-green-600";
        break;
      case "改":
        textColor = "text-red-600";
        break;
      case "未":
        textColor = "text-gray-600";
        break;
      default:
        textColor = "text-gray-600";
    }

    return <span className={`font-medium ${textColor}`}>{status}</span>;
  };

  // ソートアイコン表示
  const renderSortIcon = (field) => {
    if (sortField !== field) return null;

    return (
      <svg
        className={`ml-1 w-4 h-4 transform ${
          sortDirection === "asc" ? "" : "rotate-180"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 15l7-7 7 7"
        ></path>
      </svg>
    );
  };

  // ソートされたデータを取得
  const getSortedData = () => {
    return [...data].sort((a, b) => {
      if (a[sortField] < b[sortField]) {
        return sortDirection === "asc" ? -1 : 1;
      }
      if (a[sortField] > b[sortField]) {
        return sortDirection === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  // 全てのデータが選択されているかチェック
  const allChecked = data.length > 0 && data.every((item) => item.checkStatus);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 text-left">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={allChecked}
                    onChange={(e) => toggleAllCheckStatus(e.target.checked)}
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">納品書印刷</div>
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("status")}
              >
                <div className="flex items-center">
                  出荷ステータス
                  {renderSortIcon("status")}
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("shippingCode")}
              >
                <div className="flex items-center">
                  出荷指示書番号
                  {renderSortIcon("shippingCode")}
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("orderCode")}
              >
                <div className="flex items-center">
                  受注番号
                  {renderSortIcon("orderCode")}
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("shippingScheduleDate")}
              >
                <div className="flex items-center">
                  出荷予定日
                  {renderSortIcon("shippingScheduleDate")}
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("shippingDate")}
              >
                <div className="flex items-center">
                  出荷日
                  {renderSortIcon("shippingDate")}
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("deliveryMethod")}
              >
                <div className="flex items-center">
                  配送方法
                  {renderSortIcon("deliveryMethod")}
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("shippingSlipNumber")}
              >
                <div className="flex items-center">
                  出荷伝票番号
                  {renderSortIcon("shippingSlipNumber")}
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("deliveryDate")}
              >
                <div className="flex items-center">
                  お届け日
                  {renderSortIcon("deliveryDate")}
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("deliveryTime")}
              >
                <div className="flex items-center">
                  お届け時間帯
                  {renderSortIcon("deliveryTime")}
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("shippingLocation")}
              >
                <div className="flex items-center">
                  出荷場所
                  {renderSortIcon("shippingLocation")}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {getSortedData().map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50 transition-colors duration-150 ease-in-out cursor-pointer"
                onClick={() =>
                  item.id === 1
                    ? navigate(`/shipping-instructions/${item.id}`)
                    : null
                }
              >
                <td className="px-4 py-3 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={item.checkStatus}
                    onChange={() => toggleCheckStatus(item.id)}
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    onClick={(e) => e.stopPropagation()}
                  />
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {renderPrintStatus(item.printStatus || "未")}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {renderStatusBadge(item.status)}
                </td>
                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-800">
                  {item.shippingCode}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-gray-700">
                  {item.orderCode}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-gray-700">
                  {item.shippingScheduleDate}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-gray-700">
                  {item.shippingDate}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-gray-700">
                  {item.deliveryMethod || "宅配便"}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-gray-700">
                  {item.shippingSlipNumber || "-"}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-gray-700">
                  {item.deliveryDate || "-"}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-gray-700">
                  {item.deliveryTime || "-"}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-gray-700">
                  {item.location || "光南"}
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td
                  colSpan="12"
                  className="px-4 py-8 text-center text-gray-500"
                >
                  データがありません
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShippingTable;

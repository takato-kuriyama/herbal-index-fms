// src/components/shipping/ProductsTable.js
import React from "react";

const ProductsTable = ({ products }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <svg
          className="w-5 h-5 mr-2 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          ></path>
        </svg>
        品目情報
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                style={{ width: "30px" }}
              >
                No.
              </th>
              <th
                className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                style={{ width: "20%" }}
              >
                品番
              </th>
              <th
                className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                style={{ width: "25%" }}
              >
                品名
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                style={{ width: "10%" }}
              >
                数量
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                style={{ width: "10%" }}
              >
                単位
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                style={{ width: "10%" }}
              >
                出荷可能日
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                style={{ width: "10%" }}
              >
                確保
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                style={{ width: "15%" }}
              >
                ロット番号
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                style={{ width: "80px" }}
              >
                操作
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-2 py-3 whitespace-nowrap text-center text-gray-800">
                1
              </td>
              <td className="px-2 py-3 whitespace-nowrap">
                <select className="w-full py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  <option value="">選択してください</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.productCode}>
                      {product.productCode}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-2 py-3">
                <input
                  type="text"
                  className="w-full py-1 px-2 border border-gray-300 rounded-md"
                  placeholder="品名"
                  defaultValue=""
                />
              </td>
              <td className="px-2 py-3 whitespace-nowrap">
                <input
                  type="number"
                  className="w-full py-1 px-2 border border-gray-300 rounded-md text-right"
                  placeholder="数量"
                  defaultValue=""
                />
              </td>
              <td className="px-2 py-3 whitespace-nowrap">
                <input
                  type="text"
                  className="w-full py-1 px-2 border border-gray-300 rounded-md text-center"
                  placeholder="単位"
                  defaultValue="個"
                />
              </td>
              <td className="px-2 py-3 whitespace-nowrap">
                <div className="bg-gray-100 py-1 px-2 text-center rounded">
                  確認中
                </div>
              </td>
              <td className="px-2 py-3 whitespace-nowrap text-center">
                <div className="inline-block bg-gray-100 py-1 px-2 rounded">
                  未確保
                </div>
              </td>
              <td className="px-2 py-3 whitespace-nowrap">
                <input
                  type="text"
                  className="w-full py-1 px-2 border border-gray-300 rounded-md"
                  placeholder="ロット番号"
                  defaultValue=""
                />
              </td>
              <td className="px-2 py-3 whitespace-nowrap text-center">
                <div className="flex justify-center space-x-1">
                  <button className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600 w-7 h-7 flex items-center justify-center">
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
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                  </button>
                  <button className="p-1 bg-red-500 text-white rounded hover:bg-red-600 w-7 h-7 flex items-center justify-center">
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
                        d="M20 12H4"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            {products.length === 0 && (
              <tr>
                <td colSpan="9" className="px-4 py-8 text-center text-gray-500">
                  商品データがありません
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsTable;

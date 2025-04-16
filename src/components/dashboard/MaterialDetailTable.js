import React from "react";

const MaterialDetailTable = ({ data }) => {
  return (
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
            {data.map((material) => {
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
                  <td className="px-4 py-3 text-gray-800">{material.name}</td>
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
  );
};

export default MaterialDetailTable;

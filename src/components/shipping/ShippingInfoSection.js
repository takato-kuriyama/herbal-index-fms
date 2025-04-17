// src/components/shipping/ShippingInfoSection.js
import React from "react";

const InfoField = ({ label, value }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-600 mb-1">
      {label}
    </label>
    <div className="bg-gray-50 p-2 rounded border border-gray-200 text-gray-800">
      {value || "-"}
    </div>
  </div>
);

const ShippingInfoSection = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <svg
          className="w-5 h-5 mr-2 text-teal-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          ></path>
        </svg>
        出荷情報
      </h2>

      <div className="grid grid-cols-12 gap-4">
        {/* 左側の列 */}
        <div className="col-span-8">
          <div className="grid grid-cols-2 gap-4">
            <InfoField label="出荷指示書番号" value={data.shippingCode} />
            <InfoField label="出荷ステータス" value={data.status} />
            <InfoField label="受注取込ID" value={data.orderCode} />
            <InfoField label="受注番号" value={data.orderCode} />
            <InfoField
              label="出荷予定日"
              value={data.shippingScheduleDate || data.shippingDate}
            />
            <InfoField label="出荷場所" value={data.destination} />
          </div>

          <div className="mt-4">
            <InfoField label="出荷通信欄" value={data.notes} />
          </div>
        </div>

        {/* 右側の列 */}
        <div className="col-span-4">
          <div className="grid grid-cols-1 gap-4">
            <InfoField
              label="納品書印刷"
              value={data.printStatus || "未実施"}
            />
            <InfoField label="出荷日" value={data.shippingDate} />
            <InfoField label="出荷担当者" value={data.customerContact} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfoSection;

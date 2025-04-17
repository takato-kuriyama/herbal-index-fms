// src/components/shipping/RequestInfoSection.js
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

const RequestInfoSection = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <svg
          className="w-5 h-5 mr-2 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
          ></path>
        </svg>
        請求先情報
      </h2>

      <div className="grid grid-cols-1 gap-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <InfoField
              label="請求先コード"
              value={data.requestCode || "C01893"}
            />
          </div>
          <div className="flex-1">
            <InfoField
              label="請求先名"
              value={data.requestName || "山田電機"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestInfoSection;

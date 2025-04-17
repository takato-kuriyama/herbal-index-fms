// src/components/shipping/DeliveryInfoSection.js
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

const DeliveryInfoSection = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <svg
          className="w-5 h-5 mr-2 text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
          ></path>
        </svg>
        配送情報
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex gap-4">
            <div className="flex-1">
              <InfoField
                label="配送方法"
                value={data.deliveryMethod || "宅配便"}
              />
            </div>
            <div className="flex-1">
              <InfoField label="出荷伝票番号" value={data.trackingNumber} />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <InfoField label="お届け日" value={data.deliveryDate} />
            </div>
            <div className="flex-1">
              <InfoField label="お届け時間帯" value={data.deliveryTime} />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <InfoField
                label="電話番号"
                value={data.phone || "03-1234-5678"}
              />
            </div>
            <div className="flex-1">
              <InfoField
                label="納品先名"
                value={data.destination || "山田電機"}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-4">
            <div className="flex-1">
              <InfoField
                label="郵便番号"
                value={data.postalCode || "123-4567"}
              />
            </div>
            <div className="flex-1">
              <InfoField label="都道府県" value={data.prefecture || "東京都"} />
            </div>
          </div>

          <div>
            <InfoField
              label="住所1"
              value={data.address1 || "品川区東品川2-2-43"}
            />
          </div>

          <div>
            <InfoField
              label="住所2"
              value={data.address2 || "サンプルビル 5F"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfoSection;

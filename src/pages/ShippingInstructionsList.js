// src/pages/ShippingInstructionsList.js
import React, { useState } from "react";
import SearchPanel from "../components/shipping/SearchPanel";
import ShippingTable from "../components/shipping/ShippingTable";
import ActionButtons from "../components/shipping/ActionButtons";
import { Pagination } from "../components/common/Pagination";

const ShippingInstructionsList = () => {
  // 一覧データ用のステート
  const [shippingData, setShippingData] = useState([
    {
      id: 1,
      checkStatus: false,
      printStatus: "済",
      status: "出荷完了",
      shippingCode: "SI02411001",
      orderCode: "MX2411001",
      shippingScheduleDate: "2024/11/1",
      shippingDate: "2024/11/1",
      deliveryMethod: "宅配便",
      shippingSlipNumber: "123456789012",
      deliveryDate: "",
      deliveryTime: "",
      location: "光南",
      customerCode: "C01893",
      customerName: "山田電機",
      destination: "山田",
      shippingItems: [
        { productCode: "P00123", quantity: 5 },
        { productCode: "P00456", quantity: 2 },
      ],
    },
    {
      id: 2,
      checkStatus: false,
      printStatus: "改",
      status: "処理待ち",
      shippingCode: "SI02411002",
      orderCode: "MX2411002",
      shippingScheduleDate: "2024/11/2",
      shippingDate: "",
      deliveryMethod: "宅配便",
      shippingSlipNumber: "",
      deliveryDate: "",
      deliveryTime: "",
      location: "光南",
      customerCode: "C01894",
      customerName: "佐藤商事",
      destination: "楽天倉庫",
      shippingItems: [{ productCode: "P00789", quantity: 10 }],
    },
    {
      id: 3,
      checkStatus: false,
      printStatus: "未",
      status: "処理待ち",
      shippingCode: "SI02411003",
      orderCode: "MX2411003",
      shippingScheduleDate: "2024/11/2",
      shippingDate: "",
      deliveryMethod: "宅配便",
      shippingSlipNumber: "",
      deliveryDate: "",
      deliveryTime: "",
      location: "光南",
      customerCode: "C01895",
      customerName: "鈴木物産",
      destination: "名古屋倉庫",
      shippingItems: [
        { productCode: "P00123", quantity: 3 },
        { productCode: "P00456", quantity: 1 },
        { productCode: "P00789", quantity: 7 },
      ],
    },
    {
      id: 4,
      checkStatus: false,
      printStatus: "未",
      status: "処理待ち",
      shippingCode: "SI02411004",
      orderCode: "MX2411004",
      shippingScheduleDate: "2024/11/2",
      shippingDate: "",
      deliveryMethod: "宅配便",
      shippingSlipNumber: "",
      deliveryDate: "",
      deliveryTime: "",
      location: "光南",
      customerCode: "C01896",
      customerName: "高橋工業",
      destination: "福岡支店",
      shippingItems: [{ productCode: "P00123", quantity: 2 }],
    },
  ]);

  // 検索条件
  const [searchParams, setSearchParams] = useState({
    shippingScheduleDate: "",
    shippingLocation: "",
    shippingInstructionCode: "",
    shippingCode: "",
    shippingDate: "",
    pickingPrintStatus: "",
    shippingStatus: "",
    requestItemCode: "",
    shippingManager: "",
  });

  // 検索条件の更新
  const handleSearchChange = (params) => {
    setSearchParams(params);
    // ここで実際には検索APIを呼び出します
    console.log("Search with params:", params);
  };

  // 選択状態の切り替え
  const toggleCheckStatus = (id) => {
    setShippingData(
      shippingData.map((item) =>
        item.id === id ? { ...item, checkStatus: !item.checkStatus } : item
      )
    );
  };

  // 全選択/全解除
  const toggleAllCheckStatus = (checked) => {
    setShippingData(
      shippingData.map((item) => ({ ...item, checkStatus: checked }))
    );
  };

  // 詳細ページへの遷移
  const handleViewDetail = (id) => {
    console.log(`詳細ページへ遷移: ID=${id}`);
    // 実際にはReact Routerを使用して遷移させます
    // history.push(`/shipping-instructions/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
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
        出荷一覧
      </h1>

      {/* 検索パネル */}
      <SearchPanel onSearch={handleSearchChange} />

      {/* アクションボタン */}
      <ActionButtons
        selectedCount={shippingData.filter((item) => item.checkStatus).length}
      />

      {/* データテーブル */}
      <ShippingTable
        data={shippingData}
        toggleCheckStatus={toggleCheckStatus}
        toggleAllCheckStatus={toggleAllCheckStatus}
        onViewDetail={handleViewDetail}
      />

      {/* ページネーション */}
      <div className="mt-4 flex justify-center">
        <Pagination
          currentPage={1}
          totalPages={5}
          onPageChange={(page) => console.log(`Page ${page} requested`)}
        />
      </div>
    </div>
  );
};

export default ShippingInstructionsList;

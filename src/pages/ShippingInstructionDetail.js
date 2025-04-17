// src/pages/ShippingInstructionDetail.js
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DetailHeader from "../components/shipping/DetailHeader";
import ShippingInfoSection from "../components/shipping/ShippingInfoSection";
import ProductsTable from "../components/shipping/ProductsTable";
import RequestInfoSection from "../components/shipping/RequestInfoSection";
import DeliveryInfoSection from "../components/shipping/DeliveryInfoSection";

const ShippingInstructionDetail = () => {
  // URLからIDを取得
  const { id } = useParams();

  // 詳細データ用のステート
  const [shippingDetail, setShippingDetail] = useState({
    id: 1,
    shippingCode: "SI02411001",
    orderCode: "MX2411001",
    orderDate: "2025-01-05",
    shippingDate: "2025-01-10",
    status: "処理待ち",

    // 顧客情報
    customerCode: "C01893",
    customerName: "山田電機",
    customerContact: "山田太郎",

    // 配送情報
    destination: "山田電機",
    address: "東京都品川区東品川2-2-43",
    deliveryMethod: "宅配便",
    carrier: "ABC運輸",
    trackingNumber: "YHN67890",

    // 商品情報
    products: [
      {
        id: 1,
        productCode: "P00123",
        productName: "HDMIケーブル 2m",
        quantity: 5,
        unit: "個",
        unitPrice: 1200,
        totalPrice: 6000,
      },
      {
        id: 2,
        productCode: "P00456",
        productName: "USBメモリ 32GB",
        quantity: 2,
        unit: "個",
        unitPrice: 3500,
        totalPrice: 7000,
      },
    ],

    // 特記事項
    notes: "午前中指定の配送でお願いします。",

    // 作成・更新情報
    createdBy: "admin",
    createdAt: "2025-01-03 14:30:00",
    updatedBy: "admin",
    updatedAt: "2025-01-03 16:45:00",
  });

  // 実際のアプリケーションでは、IDに基づいてAPIからデータをフェッチします
  useEffect(() => {
    // URLからのIDをコンソールに表示
    console.log("閲覧されている出荷指示ID:", id);

    // 本来はAPIからデータを取得しますが、今回はモックデータを使用します
    // fetch(`/api/shipping-instructions/${id}`)
    //   .then(response => response.json())
    //   .then(data => setShippingDetail(data));
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* ヘッダー部分 */}
      <DetailHeader
        title="出荷詳細"
        shippingCode={shippingDetail.shippingCode}
        status={shippingDetail.status}
      />

      {/* ナビゲーションボタン */}
      <div className="mb-6 flex justify-between">
        <div className="flex space-x-4">
          <Link
            to="/shipping-instructions"
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg flex items-center"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            一覧に戻る
          </Link>
        </div>

        <div className="flex space-x-4">
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            キャンセル
          </button>

          <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
              ></path>
            </svg>
            登録/更新
          </button>

          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            実績登録
          </button>
        </div>
      </div>

      {/* 出荷情報セクション */}
      <ShippingInfoSection data={shippingDetail} />

      {/* 品目情報テーブル */}
      <ProductsTable products={shippingDetail.products} />

      {/* 請求先情報セクション */}
      <RequestInfoSection data={shippingDetail} />

      {/* 配送情報セクション */}
      <DeliveryInfoSection data={shippingDetail} />
    </div>
  );
};

export default ShippingInstructionDetail;

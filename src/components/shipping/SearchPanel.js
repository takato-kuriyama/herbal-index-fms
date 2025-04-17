// src/components/shipping/SearchPanel.js
import React, { useState, useRef, useEffect } from "react";

const SearchPanel = ({ onSearch }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);
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

  // コンテンツの高さを計測
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded]);

  // 入力値の変更を処理
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  // 検索を実行
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  // フォームをリセット
  const handleReset = () => {
    setSearchParams({
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
  };

  return (
    <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden">
      {/* 検索パネルヘッダー */}
      <div
        className="flex justify-between items-center p-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-lg font-semibold flex items-center">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          検索条件
        </h2>
        <svg
          className={`w-5 h-5 transform ${
            isExpanded ? "rotate-180" : ""
          } transition-transform duration-300`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>

      {/* 検索フォーム（アニメーションあり） */}
      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          maxHeight: isExpanded ? `${contentHeight}px` : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div className="px-4 py-4">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  出荷予定日
                </label>
                <input
                  type="date"
                  name="shippingScheduleDate"
                  value={searchParams.shippingScheduleDate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  出荷場所
                </label>
                <select
                  name="shippingLocation"
                  value={searchParams.shippingLocation}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">選択してください</option>
                  <option value="光南">光南</option>
                  <option value="西尾倉庫">西尾倉庫</option>
                  <option value="楽天倉庫">楽天倉庫</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  出荷指示書番号
                </label>
                <input
                  type="text"
                  name="shippingInstructionCode"
                  value={searchParams.shippingInstructionCode}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="例: SI02411001"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  出荷伝票番号
                </label>
                <input
                  type="text"
                  name="shippingCode"
                  value={searchParams.shippingCode}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="例: 123456789012"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  出荷ステータス
                </label>
                <select
                  name="shippingStatus"
                  value={searchParams.shippingStatus}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">選択してください</option>
                  <option value="出荷完了">出荷完了</option>
                  <option value="処理待ち">処理待ち</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  納品書印刷
                </label>
                <select
                  name="pickingPrintStatus"
                  value={searchParams.pickingPrintStatus}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">選択してください</option>
                  <option value="済">済</option>
                  <option value="未">未</option>
                  <option value="改">改</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  出荷日
                </label>
                <input
                  type="date"
                  name="shippingDate"
                  value={searchParams.shippingDate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  請求先／納品先
                </label>
                <input
                  type="text"
                  name="requestItemCode"
                  value={searchParams.requestItemCode}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="請求先もしくは納品先を入力"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  出荷担当者
                </label>
                <input
                  type="text"
                  name="shippingManager"
                  value={searchParams.shippingManager}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="担当者名を入力"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                リセット
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                検索
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;

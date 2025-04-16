import React, { useState } from "react";

const SlotAssignment = () => {
  // 日付の範囲（5日間表示）
  const [currentDate, setCurrentDate] = useState(new Date());
  const dateRange = Array(5)
    .fill()
    .map((_, i) => {
      const date = new Date(currentDate);
      date.setDate(date.getDate() + i);
      return date;
    });

  // スロット時間
  const timeSlots = ["9:00", "11:00", "12:00", "14:00", "16:00"];

  // 製造ラインの例
  const productionLines = ["ライン A", "ライン B"];

  // 担当者リスト
  const staffMembers = [
    { id: 1, name: "田中 太郎", color: "bg-blue-100" },
    { id: 2, name: "佐藤 次郎", color: "bg-green-100" },
    { id: 3, name: "鈴木 三郎", color: "bg-purple-100" },
    { id: 4, name: "高橋 四郎", color: "bg-yellow-100" },
    { id: 5, name: "伊藤 五郎", color: "bg-pink-100" },
  ];

  // スロット割り当てのデータ（実際はAPIから取得）
  const [assignments, setAssignments] = useState({});

  // 日付をフォーマットする関数
  const formatDate = (date) => {
    return `${date.getMonth() + 1}/${date.getDate()} (${
      ["日", "月", "火", "水", "木", "金", "土"][date.getDay()]
    })`;
  };

  // 前の週に移動
  const prevWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 5);
    setCurrentDate(newDate);
  };

  // 次の週に移動
  const nextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 5);
    setCurrentDate(newDate);
  };

  // スロットをクリックしたときの処理
  const handleSlotClick = (line, date, time) => {
    console.log(`${line}, ${formatDate(date)}, ${time} がクリックされました`);
  };

  // 担当者をドラッグ&ドロップしたときの処理（仮実装）
  const handleDragStart = (e, staff) => {
    e.dataTransfer.setData("staffId", staff.id);
  };

  const handleDrop = (e, line, date, time) => {
    e.preventDefault();
    const staffId = e.dataTransfer.getData("staffId");
    const staff = staffMembers.find((s) => s.id === parseInt(staffId));

    if (staff) {
      const slotKey = `${line}-${date.toDateString()}-${time}`;
      setAssignments((prev) => ({
        ...prev,
        [slotKey]: {
          staffId: staff.id,
          staffName: staff.name,
          color: staff.color,
        },
      }));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          ></path>
        </svg>
        スロット割り当て
      </h1>

      {/* 日付ナビゲーション */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={prevWeek}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg flex items-center"
        >
          <svg
            className="w-5 h-5 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          前の週
        </button>

        <h2 className="text-xl font-semibold">
          {formatDate(dateRange[0])} 〜 {formatDate(dateRange[4])}
        </h2>

        <button
          onClick={nextWeek}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg flex items-center"
        >
          次の週
          <svg
            className="w-5 h-5 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>

      {/* 2カラムレイアウト - 余白を減らしたバージョン */}
      <div className="flex gap-4">
        {/* メインのスケジュールグリッド - 左側、幅拡大 */}
        <div className="w-3/4 bg-white rounded-lg shadow overflow-hidden">
          {/* ヘッダー行（日付） */}
          <div className="flex border-b">
            <div className="w-24 bg-gray-100 px-2 py-3 font-semibold border-r text-sm">
              時間 / ライン
            </div>
            {dateRange.map((date, i) => (
              <div
                key={i}
                className="flex-1 px-2 py-3 text-center font-semibold bg-gray-100 text-sm"
              >
                {formatDate(date)}
              </div>
            ))}
          </div>

          {/* 製造ライン・時間ごとのグリッド */}
          {productionLines.map((line, lineIdx) => (
            <div key={lineIdx}>
              <div className="bg-gray-50 px-2 py-3 font-semibold border-t border-b">
                {line}
              </div>

              {timeSlots.map((time, timeIdx) => (
                <div key={`${lineIdx}-${timeIdx}`} className="flex border-b">
                  <div className="w-24 px-2 py-3 text-sm border-r bg-gray-50">
                    {time}
                  </div>

                  {dateRange.map((date, dateIdx) => {
                    // スロット情報を取得
                    const slotKey = `${line}-${date.toDateString()}-${time}`;
                    const assignment = assignments[slotKey];

                    return (
                      <div
                        key={`${lineIdx}-${timeIdx}-${dateIdx}`}
                        className={`flex-1 px-2 py-3 border-r ${
                          assignment ? assignment.color : "hover:bg-gray-50"
                        } cursor-pointer transition-colors`}
                        onClick={() => handleSlotClick(line, date, time)}
                        onDrop={(e) => handleDrop(e, line, date, time)}
                        onDragOver={handleDragOver}
                      >
                        {assignment ? (
                          <div className="text-sm font-medium">
                            {assignment.staffName}
                          </div>
                        ) : (
                          <div className="text-sm text-gray-400">
                            未割り当て
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* 担当者パネル - 右側、幅最適化 */}
        <div className="w-1/4 bg-purple-50 rounded-lg shadow">
          <div className="p-4 sticky top-4">
            <h3 className="font-semibold text-lg mb-4 text-center">
              担当者リスト
            </h3>
            <div className="space-y-3">
              {staffMembers.map((staff) => (
                <div
                  key={staff.id}
                  className={`${staff.color} border border-gray-200 rounded-lg p-3 shadow-sm cursor-grab hover:shadow-md transition-shadow`}
                  draggable="true"
                  onDragStart={(e) => handleDragStart(e, staff)}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-700 font-bold mr-3 border border-gray-300">
                      {staff.name.charAt(0)}
                    </div>
                    <span>{staff.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-500 text-center">
              ※担当者をドラッグして、スロットにドロップしてください。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotAssignment;

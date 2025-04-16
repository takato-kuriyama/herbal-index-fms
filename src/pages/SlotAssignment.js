import React, { useState } from "react";
import SlotHeader from "../components/slots/SlotHeader";
import SlotGrid from "../components/slots/SlotGrid";
import StaffPanel from "../components/slots/StaffPanel";

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

  // 担当者をドラッグ&ドロップしたときの処理
  const handleStaffDrop = (staffId, line, date, time) => {
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

  return (
    <div className="container mx-auto px-4 py-8">
      {/* ヘッダーとナビゲーション */}
      <SlotHeader
        currentDate={currentDate}
        dateRange={dateRange}
        formatDate={formatDate}
        prevWeek={prevWeek}
        nextWeek={nextWeek}
      />

      {/* 2カラムレイアウト */}
      <div className="flex gap-4">
        {/* スケジュールグリッド */}
        <SlotGrid
          dateRange={dateRange}
          timeSlots={timeSlots}
          productionLines={productionLines}
          assignments={assignments}
          formatDate={formatDate}
          handleSlotClick={handleSlotClick}
          handleStaffDrop={handleStaffDrop}
        />

        {/* 担当者パネル */}
        <StaffPanel staffMembers={staffMembers} />
      </div>
    </div>
  );
};

export default SlotAssignment;

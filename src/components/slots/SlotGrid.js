import React, { useState } from "react";

const SlotGrid = ({
  dateRange,
  timeSlots,
  productionLines,
  assignments,
  formatDate,
  handleSlotClick,
  handleStaffDrop,
  handleMultipleAssign,
}) => {
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedSlots, setSelectedSlots] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, line, date, time) => {
    e.preventDefault();
    const staffId = e.dataTransfer.getData("staffId");
    const sourceSlot = e.dataTransfer.getData("sourceSlot") || null;

    // 選択モードの場合は選択されたスロット全てに割り当て
    if (selectionMode && selectedSlots.length > 0) {
      handleMultipleAssign(staffId, selectedSlots);
      setSelectedSlots([]);
      setSelectionMode(false);
    } else {
      // 通常モードの場合は1つのスロットに割り当て
      handleStaffDrop(staffId, line, date, time, sourceSlot);
    }
  };

  // 担当者をドラッグ開始するときの処理
  const handleAssignmentDragStart = (e, line, date, time, staffId) => {
    e.dataTransfer.setData("staffId", staffId);
    e.dataTransfer.setData(
      "sourceSlot",
      `${line}-${date.toDateString()}-${time}`
    );
  };

  // スロットをクリックした時の処理
  const handleSlotSelect = (line, date, time) => {
    if (selectionMode) {
      const slotKey = `${line}-${date.toDateString()}-${time}`;
      // すでに選択されている場合は選択解除
      if (selectedSlots.includes(slotKey)) {
        setSelectedSlots(selectedSlots.filter((slot) => slot !== slotKey));
      } else {
        // 選択されていない場合は選択に追加
        setSelectedSlots([...selectedSlots, slotKey]);
      }
    } else {
      handleSlotClick(line, date, time);
    }
  };

  // 選択モードの切り替え
  const toggleSelectionMode = () => {
    if (selectionMode) {
      setSelectedSlots([]);
    }
    setSelectionMode(!selectionMode);
  };

  return (
    <div className="w-full md:w-3/4 bg-white rounded-lg shadow overflow-hidden">
      {/* ツールバー */}
      <div className="bg-gray-50 p-2 border-b flex justify-between items-center">
        <button
          onClick={toggleSelectionMode}
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            selectionMode
              ? "bg-teal-500 text-white"
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
          }`}
        >
          {selectionMode ? "選択モード：ON" : "選択モード：OFF"}
        </button>

        {selectionMode && (
          <div className="text-sm text-gray-600">
            {selectedSlots.length}個のスロットを選択中
          </div>
        )}

        {selectionMode && selectedSlots.length > 0 && (
          <button
            onClick={() => {
              setSelectedSlots([]);
            }}
            className="px-3 py-1 rounded-md text-sm font-medium bg-red-100 hover:bg-red-200 text-red-700"
          >
            選択解除
          </button>
        )}
      </div>

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
                const isSelected = selectedSlots.includes(slotKey);

                return (
                  <div
                    key={`${lineIdx}-${timeIdx}-${dateIdx}`}
                    className={`flex-1 px-2 py-3 border-r ${
                      isSelected
                        ? "bg-teal-200"
                        : assignment
                        ? assignment.color
                        : "hover:bg-gray-50"
                    } cursor-pointer transition-colors ${
                      selectionMode ? "relative" : ""
                    }`}
                    onClick={() => handleSlotSelect(line, date, time)}
                    onDrop={(e) => handleDrop(e, line, date, time)}
                    onDragOver={handleDragOver}
                  >
                    {assignment ? (
                      <div
                        className="text-sm font-medium cursor-grab"
                        draggable="true"
                        onDragStart={(e) =>
                          handleAssignmentDragStart(
                            e,
                            line,
                            date,
                            time,
                            assignment.staffId
                          )
                        }
                      >
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-700 font-bold mr-2 border border-gray-300 text-xs">
                            {assignment.staffName.charAt(0)}
                          </div>
                          {assignment.staffName}
                        </div>
                      </div>
                    ) : (
                      <div className="text-sm text-gray-400">未割り当て</div>
                    )}

                    {/* 選択モードで選択されているスロットのマーク */}
                    {isSelected && (
                      <div className="absolute top-0 right-0 w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
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
  );
};

export default SlotGrid;

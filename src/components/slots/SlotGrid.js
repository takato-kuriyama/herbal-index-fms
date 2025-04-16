import React from "react";

const SlotGrid = ({
  dateRange,
  timeSlots,
  productionLines,
  assignments,
  formatDate,
  handleSlotClick,
  handleStaffDrop,
}) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, line, date, time) => {
    e.preventDefault();
    const staffId = e.dataTransfer.getData("staffId");
    handleStaffDrop(staffId, line, date, time);
  };

  return (
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
                      <div className="text-sm text-gray-400">未割り当て</div>
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

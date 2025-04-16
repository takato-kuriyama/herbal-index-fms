import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

const SlotHeader = ({
  currentDate,
  dateRange,
  formatDate,
  prevWeek,
  nextWeek,
  setCurrentDate,
}) => {
  const [calendarOpen, setCalendarOpen] = useState(false);

  // 日付選択時のハンドラー
  const handleDateSelect = (date) => {
    if (date) {
      setCurrentDate(date);
      setCalendarOpen(false);
    }
  };

  return (
    <>
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

        <div className="relative">
          <h2
            className="text-xl font-semibold cursor-pointer flex items-center"
            onClick={() => setCalendarOpen(!calendarOpen)}
          >
            {formatDate(dateRange[0])} 〜 {formatDate(dateRange[4])}
            <svg
              className="w-5 h-5 ml-2 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </h2>

          {calendarOpen && (
            <div className="absolute z-10 mt-2 bg-white rounded-lg shadow-xl p-2 border border-gray-200">
              <DayPicker
                mode="single"
                selected={currentDate}
                onSelect={handleDateSelect}
                modifiersClassNames={{
                  selected: "bg-teal-500 text-white rounded-full",
                }}
                styles={{
                  caption: { color: "#333" },
                  day: { margin: "0.2em" },
                  nav: { fontWeight: "bold" },
                }}
              />
              <div className="mt-2 pt-2 border-t text-right">
                <button
                  className="text-sm text-teal-600 hover:text-teal-800 font-medium"
                  onClick={() => {
                    setCurrentDate(new Date());
                    setCalendarOpen(false);
                  }}
                >
                  今日
                </button>
              </div>
            </div>
          )}
        </div>

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
    </>
  );
};

export default SlotHeader;

// src/components/shipping/NotesSection.js
import React from "react";

const NotesSection = ({ notes }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <svg
          className="w-5 h-5 mr-2 text-yellow-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          ></path>
        </svg>
        特記事項
      </h2>

      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        {notes ? (
          <div className="text-gray-800 whitespace-pre-line">{notes}</div>
        ) : (
          <div className="text-gray-500 italic">特記事項はありません</div>
        )}
      </div>

      <div className="mt-4 flex justify-end">
        <button
          className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          onClick={() => console.log("編集")}
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
          編集
        </button>
      </div>
    </div>
  );
};

export default NotesSection;

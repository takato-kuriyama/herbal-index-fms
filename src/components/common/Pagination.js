// src/components/common/Pagination.js
import React from "react";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // ページネーションの表示範囲を計算
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  // 「前へ」ボタンのクリックハンドラー
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // 「次へ」ボタンのクリックハンドラー
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-center space-x-1">
      {/* 「前へ」ボタン */}
      <button
        className={`px-3 py-1 rounded-md ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700 hover:bg-gray-200"
        }`}
        onClick={handlePrevClick}
        disabled={currentPage === 1}
        aria-label="前のページへ"
      >
        <svg
          className="w-5 h-5"
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
      </button>

      {/* 最初のページへのリンク（現在のページから離れている場合のみ表示） */}
      {pageNumbers[0] > 1 && (
        <>
          <button
            className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-200"
            onClick={() => onPageChange(1)}
          >
            1
          </button>
          {pageNumbers[0] > 2 && (
            <span className="px-2 py-1 text-gray-500">...</span>
          )}
        </>
      )}

      {/* ページ番号ボタン */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`px-3 py-1 rounded-md ${
            page === currentPage
              ? "bg-teal-600 text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* 最後のページへのリンク（現在のページから離れている場合のみ表示） */}
      {pageNumbers[pageNumbers.length - 1] < totalPages && (
        <>
          {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
            <span className="px-2 py-1 text-gray-500">...</span>
          )}
          <button
            className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-200"
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

      {/* 「次へ」ボタン */}
      <button
        className={`px-3 py-1 rounded-md ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700 hover:bg-gray-200"
        }`}
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
        aria-label="次のページへ"
      >
        <svg
          className="w-5 h-5"
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
  );
};

export default Pagination;

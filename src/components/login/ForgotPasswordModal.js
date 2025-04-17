// src/components/login/ForgotPasswordModal.js
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ForgotPasswordModal = ({ isLoading, onClose, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const modalRef = useRef(null);

  // 入力メールアドレスのバリデーション
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(email));
  }, [email]);

  // モーダルの外側をクリックした時に閉じる
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  // パスワードリセットリクエスト送信
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onSubmit(email);
      setIsSent(true);

      // 送信成功後、3秒後に自動で閉じる
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  };

  // モーダルのアニメーション設定
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", duration: 0.5 },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={backdropVariants}
      >
        <motion.div
          ref={modalRef}
          className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden"
          variants={modalVariants}
        >
          {/* モーダルヘッダー */}
          <div className="bg-gradient-to-r from-teal-500 to-green-500 px-6 py-4 text-white flex justify-between items-center">
            <h3 className="text-lg font-medium">パスワードのリセット</h3>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div className="p-6">
            {isSent ? (
              // 送信成功時の表示
              <div className="text-center py-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                  <svg
                    className="w-8 h-8"
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
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  メールを送信しました
                </h4>
                <p className="text-gray-600">
                  パスワードのリセット手順を記載したメールを送信しました。メールの指示に従ってパスワードをリセットしてください。
                </p>
              </div>
            ) : (
              // フォーム表示
              <>
                <p className="text-gray-600 mb-6">
                  登録済みのメールアドレスを入力してください。パスワードのリセット手順を記載したメールをお送りします。
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="reset-email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      メールアドレス
                    </label>
                    <input
                      id="reset-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div className="flex justify-end space-x-3 mt-6">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      キャンセル
                    </button>
                    <button
                      type="submit"
                      disabled={!isValid || isLoading}
                      className={`flex items-center px-4 py-2 rounded-lg shadow-sm text-white 
                        ${
                          isValid
                            ? "bg-teal-600 hover:bg-teal-700"
                            : "bg-gray-400 cursor-not-allowed"
                        } transition-colors`}
                    >
                      {isLoading && (
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      )}
                      {isLoading ? "送信中..." : "送信"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ForgotPasswordModal;

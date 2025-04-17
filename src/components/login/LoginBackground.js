// src/components/login/LoginBackground.js
import React from "react";
import { motion } from "framer-motion";

const LoginBackground = () => {
  // 装飾用の浮遊オブジェクトの設定
  const floatingObjects = [
    {
      id: 1,
      size: "w-16 h-16",
      color: "bg-teal-500",
      opacity: "opacity-20",
      delay: 0,
    },
    {
      id: 2,
      size: "w-32 h-32",
      color: "bg-green-400",
      opacity: "opacity-10",
      delay: 2,
    },
    {
      id: 3,
      size: "w-24 h-24",
      color: "bg-yellow-300",
      opacity: "opacity-15",
      delay: 4,
    },
    {
      id: 4,
      size: "w-20 h-20",
      color: "bg-teal-600",
      opacity: "opacity-10",
      delay: 1,
    },
    {
      id: 5,
      size: "w-28 h-28",
      color: "bg-emerald-500",
      opacity: "opacity-20",
      delay: 3,
    },
    {
      id: 6,
      size: "w-12 h-12",
      color: "bg-yellow-400",
      opacity: "opacity-15",
      delay: 2.5,
    },
  ];

  // 浮遊アニメーションの設定
  const floatingAnimation = (delay) => ({
    y: ["0%", "-5%", "0%"],
    x: ["0%", "2%", "0%"],
    rotate: [0, 5, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay,
    },
  });

  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      {/* グラデーション背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>

      {/* 装飾的な背景パターン */}
      <svg
        className="absolute bottom-0 left-0 transform translate-y-1/4 -translate-x-1/4 text-teal-50"
        width="600"
        height="600"
        fill="none"
        viewBox="0 0 600 600"
      >
        <defs>
          <pattern
            id="pattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="600" height="600" fill="url(#pattern)" />
      </svg>

      {/* 大きな装飾サークル（右側） */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500 opacity-10 rounded-full filter blur-3xl transform translate-x-1/2"></div>

      {/* 大きな装飾サークル（左下） */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-400 opacity-10 rounded-full filter blur-3xl transform translate-y-1/3 -translate-x-1/3"></div>

      {/* 浮遊オブジェクト */}
      {floatingObjects.map((obj) => {
        // オブジェクトの初期位置をランダムに設定
        const top = `${Math.random() * 100}%`;
        const left = `${Math.random() * 100}%`;

        return (
          <motion.div
            key={obj.id}
            className={`absolute ${obj.size} ${obj.color} ${obj.opacity} rounded-full filter blur-xl`}
            style={{ top, left }}
            animate={floatingAnimation(obj.delay)}
          ></motion.div>
        );
      })}

      {/* 右上の装飾 - ドット */}
      <svg
        className="absolute top-0 right-0 -mt-16 -mr-16 text-teal-200"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
      >
        <defs>
          <pattern
            id="svg-pattern-squares-1"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#svg-pattern-squares-1)" />
      </svg>

      {/* シンボリックな植物アイコン（テーマに合わせて） */}
      <div className="absolute bottom-10 right-10 text-gray-200 opacity-20">
        <svg
          className="w-40 h-40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default LoginBackground;

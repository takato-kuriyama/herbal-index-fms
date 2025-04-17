// src/components/common/PrivateRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

// 認証済みユーザーのみがアクセスできるルートコンポーネント
const PrivateRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  // デバッグ用コンソールログ
  console.log(
    "PrivateRoute - isAuthenticated:",
    isAuthenticated,
    "isLoading:",
    isLoading
  );

  // 認証状態の読み込み中はローディング表示
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  // 認証されていない場合はログインページにリダイレクト
  if (!isAuthenticated) {
    console.log("PrivateRoute - User not authenticated, redirecting to login");
    return <Navigate to="/login" replace />;
  }

  // 認証されている場合は子コンポーネントを表示
  console.log("PrivateRoute - User authenticated, rendering children");
  return <Outlet />;
};

export default PrivateRoute;

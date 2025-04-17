// src/pages/Login.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login/LoginForm";
import LoginBackground from "../components/login/LoginBackground";
import ForgotPasswordModal from "../components/login/ForgotPasswordModal";
import { useAuth } from "../contexts/AuthContext"; // AuthContextからuseAuthをインポート

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth(); // AuthContextからlogin関数を取得

  // 既にログイン済みの場合はダッシュボードにリダイレクト
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  // リセット用のエフェクト
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // ログイン処理
  const handleLogin = (credentials) => {
    setIsLoading(true);
    setError("");

    // ログイン処理のシミュレーション
    setTimeout(() => {
      if (
        credentials.email === "demo@herbal.example.com" &&
        credentials.password === "password"
      ) {
        // ログイン成功 - AuthContextのlogin関数を呼び出す
        login({
          name: "デモユーザー",
          email: credentials.email,
          role: "manager",
        });
        navigate("/");
      } else {
        // ログイン失敗
        setError("メールアドレスまたはパスワードが正しくありません。");
      }
      setIsLoading(false);
    }, 1500);
  };

  // パスワードリセット処理
  const handleForgotPassword = (email) => {
    setIsLoading(true);

    // リセットメール送信のシミュレーション
    setTimeout(() => {
      setShowForgotPassword(false);
      setIsLoading(false);
      // 成功メッセージを表示する場合はここに実装
    }, 1500);
  };

  // コンソールにデバッグ情報を表示
  console.log("Login component rendered, isAuthenticated:", isAuthenticated);

  return (
    <div className="min-h-screen flex flex-col">
      {/* バックグラウンドコンポーネント */}
      <LoginBackground />

      {/* メインコンテンツ */}
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-md">
          {/* ロゴとタイトル */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12 text-teal-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-wider">
              <span className="text-teal-600">HERBAL</span>
              <span className="text-yellow-500 ml-1">INDEX</span>
            </h1>
            <p className="mt-2 text-gray-600">Factory Management System</p>
          </div>

          {/* ログインフォーム */}
          <div>
            <LoginForm
              onLogin={handleLogin}
              isLoading={isLoading}
              error={error}
              onForgotPassword={() => setShowForgotPassword(true)}
            />
          </div>

          {/* フッター */}
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>© 2025 HERBAL INDEX - All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* パスワードリセットモーダル */}
      {showForgotPassword && (
        <ForgotPasswordModal
          isLoading={isLoading}
          onClose={() => setShowForgotPassword(false)}
          onSubmit={handleForgotPassword}
        />
      )}
    </div>
  );
};

export default Login;

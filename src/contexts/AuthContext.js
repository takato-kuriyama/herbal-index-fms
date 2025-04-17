// src/contexts/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

// 認証コンテキストの作成
const AuthContext = createContext(null);

// 認証プロバイダーコンポーネント
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  // 初期化時に認証状態を確認
  useEffect(() => {
    // ローカルストレージから認証状態を取得
    const checkAuth = () => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";

      if (loggedIn) {
        // 実際のアプリケーションではここでトークンの検証などを行います
        setIsAuthenticated(true);

        // ユーザー情報がない場合はデフォルト情報を設定
        setUser({
          name: "デモユーザー",
          email: "demo@herbal.example.com",
          role: "manager",
        });
      }

      // ローディング状態を解除
      setIsLoading(false);
    };

    checkAuth();

    // デバッグ用コンソールログ
    console.log("AuthContext initialized, checking localStorage...");
  }, []);

  // ログイン処理
  const login = (userData) => {
    console.log("Login function called with user data:", userData);
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem("isLoggedIn", "true");
  };

  // ログアウト処理
  const logout = () => {
    console.log("Logout function called");
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("isLoggedIn");
  };

  // 認証状態や関数をコンテキストで提供
  const value = {
    isAuthenticated,
    isLoading,
    user,
    login,
    logout,
  };

  console.log("AuthContext current state:", {
    isAuthenticated,
    isLoading,
    user: user ? "exists" : "null",
  });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// カスタムフック - 認証コンテキストを使用するためのフック
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;

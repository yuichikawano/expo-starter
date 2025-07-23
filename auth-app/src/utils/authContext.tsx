import React, { useState } from "react";
import { useRouter } from "expo-router";

export const AuthContextState = React.createContext({
  isLoggedIn: false,
});
export const AuthContextAction = React.createContext({
  login: () => {},
  logout: () => {},
});
export const useAuthProvider = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const login = () => {
    setIsLoggedIn(true);
    /**
     * (Tips)
     * ここはログイン画面に戻させないようにreplaceする
     */
    router.replace("/");
  };
  const logout = () => {
    setIsLoggedIn(false);
    /**
     * (Tips)
     * ここも元の画面に戻させないようにreplaceする
     */
    router.replace("/login");
  };
  return { isLoggedIn, login, logout };
};

export function useAuthState() {
  return React.useContext(AuthContextState);
}
export function useAuthAction() {
  return React.useContext(AuthContextAction);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { isLoggedIn, login, logout } = useAuthProvider();
  return (
    <AuthContextState.Provider
      value={{
        isLoggedIn: isLoggedIn,
      }}
    >
      <AuthContextAction.Provider
        value={{
          login,
          logout,
        }}
      >
        {children}
      </AuthContextAction.Provider>
    </AuthContextState.Provider>
  );
}

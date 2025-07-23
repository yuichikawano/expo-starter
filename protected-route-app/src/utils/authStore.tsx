import { create } from "zustand/react";
import { getItem, setItem, deleteItemAsync } from "expo-secure-store";
import { createJSONStorage, persist } from "zustand/middleware";

type UserState = {
  isLoggedIn: boolean;
  shouldCreateAccount: boolean;
  login: () => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<UserState>(
    (set) => ({
      isLoggedIn: false,
      shouldCreateAccount: false,
      login: () => set((state) => ({ ...state, isLoggedIn: true })),
      logout: () => set((state) => ({ ...state, isLoggedIn: false })),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => ({
        getItem,
        setItem,
        removeItem: deleteItemAsync,
      })),
    },
  ),
);

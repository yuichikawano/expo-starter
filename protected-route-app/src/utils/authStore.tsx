import { create } from "zustand/react";
import { getItem, setItem, deleteItemAsync } from "expo-secure-store";
import { createJSONStorage, persist } from "zustand/middleware";

type UserState = {
  isLoggedIn: boolean;
  shouldCreateAccount: boolean;
  login: () => void;
  logout: () => void;
  hasCompletedOnboarding: boolean;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
  isVip: boolean;
  loginAsVip: () => void;
};

export const useAuthStore = create(
  persist<UserState>(
    (set) => ({
      isLoggedIn: false,
      shouldCreateAccount: false,
      hasCompletedOnboarding: false,
      isVip: false,
      loginAsVip: () =>
        set((state) => ({ ...state, isVip: true, isLoggedIn: true })),
      completeOnboarding: () => {
        console.log("complete onboarding");
        set((state) => ({ ...state, hasCompletedOnboarding: true }));
      },
      resetOnboarding: () =>
        set((state) => ({ ...state, hasCompletedOnboarding: false })),
      login: () => set((state) => ({ ...state, isLoggedIn: true })),
      logout: () =>
        set((state) => ({ ...state, isLoggedIn: false, isVip: false })),
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

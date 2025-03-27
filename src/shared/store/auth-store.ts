import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Auth {
  token: string;
  isLogin: boolean;
  userId: number;
  nickname: string;
}

interface AuthProps extends Auth {
  setIsLogin: (token: string, userId: number, nickname: string) => void;
  setIsLogout: () => void;
}

const INIT = {
  token: "",
  isLogin: false,
  userId: 0,
  nickname: "",
};

const useAuthStore = create(
  persist<AuthProps>(
    (set) => ({
      ...INIT,
      setIsLogin: (token: string, userId: number, nickname: string) =>
        set({ isLogin: true, token, userId, nickname }),
      setIsLogout: () => set(INIT),
    }),
    {
      name: "user",
    }
  )
);

export { useAuthStore };

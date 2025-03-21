import { create } from "zustand";

interface Auth {
  token: string;
  isLogin: boolean;
  userId: string;
  nickname: string;
}

interface AuthProps extends Auth {
  setIsLogin: (token: string, userId: string, nickname: string) => void;
  setIsLogout: () => void;
}

const INIT = {
  token: "",
  isLogin: false,
  userId: "",
  nickname: "",
};

const useAuthStore = create<AuthProps>((set) => ({
  ...INIT,
  setIsLogin: (token: string, userId: string, nickname: string) =>
    set({ isLogin: true, token, userId, nickname }),
  setIsLogout: () => set(INIT),
}));

export { useAuthStore };

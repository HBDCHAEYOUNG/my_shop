import { create } from "zustand";

interface Auth {
  isLogin: boolean;
  userId: string;
  nickname: string;
}

interface AuthProps extends Auth {
  setIsLogin: (userId: string, nickname: string) => void;
  setIsLogout: () => void;
}

const INIT = {
  isLogin: false,
  userId: "",
  nickname: "",
};

const useAuthStore = create<AuthProps>((set) => ({
  ...INIT,
  setIsLogin: (userId: string, nickname: string) =>
    set({ isLogin: true, userId, nickname }),
  setIsLogout: () => set(INIT),
}));

export { useAuthStore };

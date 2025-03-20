import { create } from "zustand";

interface Auth {
  isLogin: boolean;
  token: string;
  userId: string;
}

interface AuthProps extends Auth {
  setIsLogin: (token: string, userId: string) => void;
  setIsLogout: () => void;
}

const INIT = {
  isLogin: false,
  token: "",
  userId: "",
};

const useAuthStore = create<AuthProps>((set) => ({
  ...INIT,
  setIsLogin: (token: string, userId: string) =>
    set({ isLogin: true, token, userId }),
  setIsLogout: () => set(INIT),
}));

export { useAuthStore };

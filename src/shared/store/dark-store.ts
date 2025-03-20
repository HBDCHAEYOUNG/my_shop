import { create } from "zustand";

interface DarkStore {
  darkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (mode: boolean) => void;
}

const useDarkStore = create<DarkStore>((set) => ({
  darkMode:
    localStorage.getItem("theme") === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  toggleDarkMode: () =>
    set((state) => {
      const newMode = !state.darkMode;
      localStorage.setItem("theme", newMode ? "dark" : "light"); // 로컬스토리지에 상태 저장
      return { darkMode: newMode };
    }),
  setDarkMode: (mode: boolean) => set({ darkMode: mode }),
}));

export { useDarkStore };

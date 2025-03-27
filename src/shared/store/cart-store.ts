import { create } from "zustand";

interface CartStore {
  cartVersion: number;
  updateCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cartVersion: 0,
  updateCart: () => set((state) => ({ cartVersion: state.cartVersion + 1 })),
}));

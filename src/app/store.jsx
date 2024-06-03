import create from "zustand";

export const useStore = create((set) => ({
  purchase: 0,
  product: 0,
  addCart: (quantity) =>
    set((state) => ({
      purchase: state.purchase + quantity * 17999000,
      product: state.product + quantity * 1,
    })),
}));

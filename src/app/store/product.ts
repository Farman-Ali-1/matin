// app/store/productStore.ts
import { create } from 'zustand';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  [key: string]: any;
}

interface ProductState {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product) => void;
  clearSelectedProduct: () => void;
}

const useProductStore = create<ProductState>((set) => ({
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  clearSelectedProduct: () => set({ selectedProduct: null }),
}));

export default useProductStore;

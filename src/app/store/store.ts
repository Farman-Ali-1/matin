import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  id: number;
  name: string;
  price: number;
  size: string;
  image: string;
  quantity: number;
}


interface Store {
  cart: Product[];
  addtoCart: (product: Product) => void;
  removeFromCart: (id: number, size: string) => void;
  incrementQuantity: (id: number, size: string) => void;
  decrementQuantity: (id: number, size: string) => void;
  clearCart: () => void;
  getCart: () => Product[];

  // ✅ New Function for Custom Box Page
  addCustomizedBoxToCart: (
    packaging: { title: string; price: number },
    size: { label: string; price: number },
    fillings: { title: string; quantity: number }[],
    image: string
  ) => void;
}

const useStore = create<Store>()(
  persist(
    (set, get) => ({
      cart: [],

      addtoCart: (product: Product) =>
        set((state) => {
          const quantityToAdd = product.quantity || 1;

          const existingIndex = state.cart.findIndex(
            (item) =>
              item.id === product.id &&
              item.size === product.size
          );

          if (existingIndex !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingIndex].quantity += quantityToAdd;
            return { cart: updatedCart };
          } else {
            return {
              cart: [...state.cart, { ...product, quantity: quantityToAdd }],
            };
          }
        }),

      removeFromCart: (id, size) =>
        set((state) => ({
          cart: state.cart.filter(
            (item) =>
              !(item.id === id && item.size === size)
          ),
        })),

      incrementQuantity: (id, size) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id && item.size === size 
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),

      decrementQuantity: (id, size, ) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id &&
            item.size === size &&
            item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        })),

      clearCart: () => set({ cart: [] }),

      getCart: () => get().cart,

      // ✅ New Function for Custom Box Page
      addCustomizedBoxToCart: (
        packaging,
        size,
        fillings,
        image
      ) =>
        set((state) => {
          const newProduct: Product = {
            id: Date.now(), // unique identifier
            name: `${packaging.title} - ${size.label}`,
            price: size.price + packaging.price,
            size: size.label,
            image,
            quantity: 1,
          };

          return {
            cart: [...state.cart, newProduct],
          };
        }),
    }),
    {
      name: "cart-storage", // LocalStorage key
    }
  )
);

export default useStore;

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User, Role, CartItem, Medicine } from "@medicycle/types";

// Auth Store
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (role: Role, name: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (role, name) =>
        set({
          isAuthenticated: true,
          user: {
            id: Math.random().toString(36).substring(7),
            name,
            email: `${name.toLowerCase().replace(" ", ".")}@example.com`,
            role,
          },
        }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    { name: "medicycle-auth" }
  )
);

// Cart Store
interface CartState {
  items: CartItem[];
  addItem: (medicineId: string, quantity: number) => void;
  removeItem: (medicineId: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (medicineId, quantity) =>
        set((state) => {
          const existing = state.items.find((i) => i.medicineId === medicineId);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.medicineId === medicineId
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              ),
            };
          }
          return { items: [...state.items, { medicineId, quantity }] };
        }),
      removeItem: (medicineId) =>
        set((state) => ({
          items: state.items.filter((i) => i.medicineId !== medicineId),
        })),
      clearCart: () => set({ items: [] }),
    }),
    { name: "medicycle-cart" }
  )
);

// Wishlist Store
interface WishlistState {
  items: string[]; // medicine IDs
  toggleItem: (medicineId: string) => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set) => ({
      items: [],
      toggleItem: (medicineId) =>
        set((state) => ({
          items: state.items.includes(medicineId)
            ? state.items.filter((id) => id !== medicineId)
            : [...state.items, medicineId],
        })),
    }),
    { name: "medicycle-wishlist" }
  )
);

// Theme Store
interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDarkMode: true, // Default to true based on prompt dark theme design
      toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    { name: "medicycle-theme" }
  )
);

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { loadState } from './storage';
import { JWT_PERSISTENT_STATE } from './user.slice';
export interface CartItem {
  id: number;
  count: number;
}

export interface CartState {
  items: CartItem[];
}
export interface CartPersisntentState {
  cart: CartItem[] | null;
}

const initialState: CartState = {
  items: loadState<CartPersisntentState>(JWT_PERSISTENT_STATE)?.cart || []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    delete: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    add: (state, action: PayloadAction<number>) => {
      const existed = state.items.find((i) => i.id === action.payload);
      if (!existed) {
        state.items.push({ id: action.payload, count: 1 });
        return;
      }
      state.items.map((i) => {
        if (i.id === action.payload) {
          i.count += 1;
        }
        return i;
      });
    },
    remove: (state, action: PayloadAction<number>) => {
      const existed = state.items.find((i) => i.id === action.payload);
      if (!existed) {
        return;
      }
      if (existed && existed.count > 1) {
        state.items.map((i) => {
          if (i.id === action.payload) {
            i.count -= 1;
          }
          return i;
        });
        return;
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;

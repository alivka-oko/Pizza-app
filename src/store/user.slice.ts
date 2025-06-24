import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { loadState } from './storage';
export interface UserState {
  jwt: string | null;
}
export interface UserPersistentState {
  jwt: string | null;
}

export const JWT_PERSISTENT_STATE = 'userData';

const initialState: UserState = {
  jwt: loadState(JWT_PERSISTENT_STATE) ?? null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addJwt: (state, action: PayloadAction<string>) => {
      state.jwt = action.payload;
    },
    logout: (state) => {
      state.jwt = null;
    }
  }
});

export default userSlice.reducer;
export const userActions = userSlice.actions;

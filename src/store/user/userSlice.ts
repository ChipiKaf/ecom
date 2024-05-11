// src/features/user/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface UserState {
  isLoggedIn: boolean;
  username: string | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  username: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = true;
      state.username = action.payload;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.username = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const selectUsername = (state: RootState) => state.user.username;

export default userSlice.reducer;

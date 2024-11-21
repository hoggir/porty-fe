import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { loginUser, signUpUser } from '../pages/api/userApi';
import Cookies from 'js-cookie';

interface User {
  email: string;
}

interface UserState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null | undefined;
}

const initialState: UserState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

interface AuthPayload {
  email: string;
  password: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

export const login = createAsyncThunk<AuthResponse, AuthPayload, { rejectValue: string }>(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await loginUser(email, password);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const signUp = createAsyncThunk<AuthResponse, AuthPayload, { rejectValue: string }>(
  'user/signUp',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await signUpUser(email, password);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      Cookies.remove('token'); // Remove token from cookies on logout
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        Cookies.set('token', action.payload.token); // Save token to cookies on login success
      })
      .addCase(login.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = action.payload.user;
      })
      .addCase(signUp.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError } = userSlice.actions;
export default userSlice.reducer;
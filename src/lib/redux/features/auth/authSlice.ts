import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface userProfile {
  email: string;
  first_name: string;
  last_name: string;
  role: "guest" | "host" | "admin";
}

interface AuthState {
  user: userProfile | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initializeAuth: (state) => {
      const token = Cookies.get("token");
      const savedUser = localStorage.getItem("user_profile");

      // ONLY allow user data if the access token actually exists in cookies
      if (token && savedUser) {
        state.user = JSON.parse(savedUser);
        state.isAuthenticated = true;
      } else {
        // Wipe the profile cache if token is expired/missing
        state.user = null;
        state.isAuthenticated = false;
        localStorage.removeItem("user_profile");
      }
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { initializeAuth, setUser, logout } = authSlice.actions;
export default authSlice.reducer;

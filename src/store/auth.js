import { createSlice } from "@reduxjs/toolkit";

// the auth section
const initAuth = {
  isAuth: false,
};
const auth = createSlice({
  name: "auth",
  initialState: initAuth,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

const authReducer = auth.reducer;
// export
export const authActions = auth.actions;
export default authReducer;

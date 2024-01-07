import {createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState:{
    userInfo:null,
    token:null
  },
  reducers: {
    login: (state, action) => {//meaning of action is {type:"", payload:""}
      state.userInfo = action.payload;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.userInfo = null;
      state.token = null;
    }, 
  },
});

export const { login, logout} = userSlice.actions;

export default userSlice.reducer;

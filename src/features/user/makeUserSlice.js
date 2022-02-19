import { createSlice } from "@reduxjs/toolkit";

export const makeUserSlice = createSlice({
  name: "makeUser",
  initialState: {
    fname: "",
    lname: "",
    email: ""
  },
  reducers: {
    setFName: (state, action) => {
      state.fname = action.payload;
    },
    setLName: (state, action) => {
      state.lname = action.payload;
    }
  }
});

export const { setFName, setLName } = makeUserSlice.actions;

export const fName = (state) => state.makeUser.fname;
export const lName = (state) => state.makeUser.lname;

export default makeUserSlice.reducer;

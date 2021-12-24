import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    currency: "USD"
  },
  reducers: {
    setCurrency(state, action) {
      state.currency = action.payload;
      // return {...state, currency: action.payload}
    }
  }
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;

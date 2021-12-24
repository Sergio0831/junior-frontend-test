import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    visible: false
  },
  reducers: {
    showModal(state) {
      state.visible = true;
    },
    hideModal(state) {
      state.visible = false;
    },
    toggleModal(state) {
      state.visible = !state.visible;
    }
  }
});

export const { showModal, hideModal, toggleModal } = modalSlice.actions;
export default modalSlice.reducer;

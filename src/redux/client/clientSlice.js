import { createSlice } from "@reduxjs/toolkit";
import { clientAdd, clientList, clientDetailesEdit } from "./index";

const clientSlice = createSlice({
  name: "clientSlice",
  initialState: {
    listClient: {},
    editClient: {},
    addClient: {},
    error: null,
  },
  reducers: {
    clearAddClient: (state) => {
      state.addClient = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(clientAdd.pending, (state) => {})
      .addCase(clientAdd.fulfilled, (state, action) => {
        state.addClient = action.payload;
      })
      .addCase(clientAdd.rejected, (state, action) => {
        state.error = action.payload; // Make sure to handle the rejection correctly
      })
      .addCase(clientList.pending, (state) => {})
      .addCase(clientList.fulfilled, (state, action) => {
        state.listClient[action.payload.tag] = action.payload;
      })
      .addCase(clientList.rejected, (state, action) => {
        state.error = action.payload; // Make sure to handle the rejection correctly
      })
      .addCase(clientDetailesEdit.pending, (state) => {})
      .addCase(clientDetailesEdit.fulfilled, (state, action) => {
        state.editClient = action.payload;
      })
      .addCase(clientDetailesEdit.rejected, (state, action) => {
        state.error = action.payload; // Make sure to handle the rejection correctly
      });
  },
});
export const { clearAddClient } = clientSlice.actions;
export default clientSlice.reducer;

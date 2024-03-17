import { createSlice } from "@reduxjs/toolkit";
import { EnquiryAdd, EnquiryLists, EnquiryEdite } from "./index";

const enqiurySlice = createSlice({
  name: "enqiurySlice",
  initialState: {
    addEnqiury: {},
    ListEnqiury: {},
    ListEnqiuryFollowUp: {},
    ListEnqiuryNew: {},
    EditEnqiury: {},
    error: null,
  },
  reducers: {
    clearAddEnqiury: (state) => {
      state.addEnqiury = {};
    },
    ListEnqiuryFollowUp: (state, action) => {
      state.ListEnqiuryFollowUp = action.payload;
    },
    ListEnqiuryNew: (state, action) => {
      state.ListEnqiuryNew = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(EnquiryAdd.pending, (state) => {})
      .addCase(EnquiryAdd.fulfilled, (state, action) => {
        state.addEnqiury = action.payload;
      })
      .addCase(EnquiryAdd.rejected, (state, action) => {
        state.error = action.payload; // Make sure to handle the rejection correctly
      })
      .addCase(EnquiryLists.pending, (state) => {})
      .addCase(EnquiryLists.fulfilled, (state, action) => {
        state.ListEnqiury[action.payload.enquiryStatus] =
          action.payload.response;
      })
      .addCase(EnquiryLists.rejected, (state, action) => {
        state.error = action.payload; // Make sure to handle the rejection correctly
      })
      .addCase(EnquiryEdite.pending, (state) => {})
      .addCase(EnquiryEdite.fulfilled, (state, action) => {
        state.EditEnqiury = action.payload;
      })
      .addCase(EnquiryEdite.rejected, (state, action) => {
        state.error = action.payload; // Make sure to handle the rejection correctly
      });
  },
});

export const { clearAddEnqiury, ListEnqiuryFollowUp, ListEnqiuryNew } =
  enqiurySlice.actions;
export default enqiurySlice.reducer;

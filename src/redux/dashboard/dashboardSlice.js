import { createSlice } from "@reduxjs/toolkit";
import { dashboradInsightsList } from "./index";

const dashboardSlice = createSlice({
  name: "clientSlice",
  initialState: {
    listDashboradInsights: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(dashboradInsightsList.pending, (state) => {})
      .addCase(dashboradInsightsList.fulfilled, (state, action) => {
        state.listDashboradInsights = action.payload;
      })
      .addCase(dashboradInsightsList.rejected, (state, action) => {
        state.error = action.payload; // Make sure to handle the rejection correctly
      });
  },
});
export default dashboardSlice.reducer;

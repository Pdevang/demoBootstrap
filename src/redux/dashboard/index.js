import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../apis/api";
import { loadingEnd, loadingStart } from "../setLoading/setLoading";
// import ToastMessage from "../../component/toast/ToastMessage";

export const dashboradInsightsList = createAsyncThunk(
  "dashboradInsightsList/get",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(loadingStart());
    const backend = new API();
    try {
      const response = await backend.fetch(API.dashboradInsightsList(), {
        method: "GET",
      });
      dispatch(loadingEnd());
      // You may want to return some data here if needed
      return response;
    } catch (error) {
      dispatch(loadingEnd());
      console.error("Error Fetching Products:", error);
      // You can handle the error here or throw it again if needed
      return rejectWithValue(error);
    }
  }
);

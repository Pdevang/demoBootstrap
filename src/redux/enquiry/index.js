import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadingEnd, loadingStart } from "../setLoading/setLoading";
import API from "../../apis/api";
import ToastMessage from "../../component/toast/ToastMessage";

export const EnquiryAdd = createAsyncThunk(
  "EnquiryAdd/post",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(loadingStart());
    try {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }

      const backend = new API();
      const response = await backend.fetch(API.enquiryAdd(), {
        method: "POST",
        body: formData,
      });
      dispatch(loadingEnd());
      if (response.status === true) {
        dispatch(EnquiryLists({ enquiryStatus: "All" }));
        dispatch(EnquiryLists({ enquiryStatus: data.enquiry_status }));
      }
      // You may want to return some data here if needed
      ToastMessage(response);
      return response;
    } catch (error) {
      dispatch(loadingEnd());
      console.error("Error Adding Enquiry:", error);
      // You can handle the error here or throw it again if needed
      return rejectWithValue(error);
    }
  }
);

export const EnquiryLists = createAsyncThunk(
  "EnquiryLists/get",
  async (
    { data, enquiryType, representative, search, enquiryStatus },
    { rejectWithValue, dispatch }
  ) => {
    dispatch(loadingStart());
    const backend = new API();
    try {
      const response = await backend.fetch(
        API.enquiryList(enquiryType, representative, search, enquiryStatus),
        {
          method: "GET",
        }
      );
      // ToastMessage(response);

      dispatch(loadingEnd());
      let data = {
        response,
        enquiryStatus,
      };
      // You may want to return some data here if needed
      return data;
    } catch (error) {
      dispatch(loadingEnd());
      console.error("Error Fetching Products:", error);
      // You can handle the error here or throw it again if needed
      return rejectWithValue(error);
    }
  }
);

export const EnquiryEdite = createAsyncThunk(
  "EnquiryEdite/update",
  async ({ data, id }, { rejectWithValue, dispatch }) => {
    dispatch(loadingStart());
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    const backend = new API();
    try {
      const response = await backend.fetch(API.enquiryEdite(id), {
        method: "POST",
        body: formData,
      });
      ToastMessage(response);
      if (response.status === true) {
        dispatch(EnquiryLists({ enquiryStatus: "All" }));
        dispatch(EnquiryLists({ enquiryStatus: data.enquiry_status }));
      }
      dispatch(loadingEnd());
      return response;
    } catch (error) {
      dispatch(loadingEnd());
      console.error("Error Fetching Products:", error);
      return rejectWithValue(error);
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../apis/api";
import { loadingEnd, loadingStart } from "../setLoading/setLoading";
import ToastMessage from "../../component/toast/ToastMessage";

export const clientList = createAsyncThunk(
  "clientList/get",
  async ({ data, tag }, { rejectWithValue, dispatch }) => {
    dispatch(loadingStart());
    const backend = new API();
    try {
      const response = await backend.fetch(API.clientList(data, tag), {
        method: "GET",
      });
      // ToastMessage(response);

      dispatch(loadingEnd());
      let datas = {
        response,
        tag: tag || "All",
      };
      // You may want to return some data here if needed
      return datas;
    } catch (error) {
      dispatch(loadingEnd());
      console.error("Error Fetching Products:", error);
      // You can handle the error here or throw it again if needed
      return rejectWithValue(error);
    }
  }
);

export const clientAdd = createAsyncThunk(
  "clientAdd/post",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(loadingStart());
    try {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }

      const backend = new API();
      const response = await backend.fetch(API.clientAdd(), {
        method: "POST",
        body: formData,
      });
      dispatch(loadingEnd());
      if (response.status === true) {
        // dispatch(inventoryProductListSlice({ page: 1, per_page: 2 }));
        dispatch(clientList({ tag: "All" }));
        dispatch(clientList({ tag: "Manual" }));
      }
      // You may want to return some data here if needed
      ToastMessage(response);
      return response;
    } catch (error) {
      dispatch(loadingEnd());
      console.error("Error Adding Product:", error);
      // You can handle the error here or throw it again if needed
      return rejectWithValue(error);
    }
  }
);

export const clientDetailesEdit = createAsyncThunk(
  "clientDetailesEdit/update",
  async ({ data, id }, { rejectWithValue, dispatch }) => {
    dispatch(loadingStart());
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    const backend = new API();
    try {
      const response = await backend.fetch(API.clientDetailesUpdate(id), {
        method: "POST",
        body: formData,
      });
      if (response.status === true) {
        dispatch(clientList({ tag: data.tag }));
      }
      dispatch(loadingEnd());
      ToastMessage(response);
      return response;
    } catch (error) {
      dispatch(loadingEnd());
      console.error("Error Fetching Products:", error);
      return rejectWithValue(error);
    }
  }
);

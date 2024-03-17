import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../apis/api";
import ToastMessage from "../../component/toast/ToastMessage";
import { loadingEnd, loadingStart } from "../setLoading/setLoading";

export const staffAdd = createAsyncThunk(
  "staffAdd/post",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(loadingStart());
    try {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }

      const backend = new API();
      const response = await backend.fetch(API.staffAdd(), {
        method: "POST",
        body: formData,
      });
      dispatch(loadingEnd());
      if (response.status === true) {
        // dispatch(inventoryProductListSlice({ page: 1, per_page: 2 }));
        dispatch(staffList());
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

export const staffList = createAsyncThunk(
  "staffList/get",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(loadingStart());
    const backend = new API();
    try {
      const response = await backend.fetch(API.staffList(), {
        method: "GET",
      });
      // ToastMessage(response);

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

export const staffEdit = createAsyncThunk(
  "staffEdit/update",
  async ({ data, id }, { rejectWithValue, dispatch }) => {
    dispatch(loadingStart());
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    const backend = new API();
    try {
      const response = await backend.fetch(API.staffEdit(id), {
        method: "POST",
        body: formData,
      });
      if (response.status === true) {
        dispatch(staffList());
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

export const staffDelete = createAsyncThunk(
  "staffDelete/delete",
  async (id, { rejectWithValue, dispatch }) => {
    dispatch(loadingStart());
    const backend = new API();
    try {
      const response = await backend.fetch(API.staffDelete(id), {
        method: "POST",
      });
      dispatch(loadingEnd());
      if (response.status === true) {
        dispatch(staffList());
      }
      ToastMessage(response);
      return response;
    } catch (error) {
      dispatch(loadingEnd());
      console.error("Error Fetching staff:", error);
      return rejectWithValue(error);
    }
  }
);

export const getStaffAvailabilty = createAsyncThunk(
  "getStaffAvailabilty/get",
  async (id, { rejectWithValue, dispatch }) => {
    dispatch(loadingStart());
    const backend = new API();
    try {
      const response = await backend.fetch(API.getStaffAvailabilty(id), {
        method: "GET",
      });
      // ToastMessage(response);

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

export const getAllAppointments = createAsyncThunk(
  "getAllAppointments/get",
  async ({ id, staff, status, search }, { rejectWithValue, dispatch }) => {
    dispatch(loadingStart());
    const backend = new API();
    try {
      const response = await backend.fetch(
        API.getAllAppointments(id, staff, status, search),
        {
          method: "GET",
        }
      );
      // ToastMessage(response);

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

export const getAllInvoceHistory = createAsyncThunk(
  "getAllInvoceHistory/get",
  async ({ id, staff, status, search }, { rejectWithValue, dispatch }) => {
    dispatch(loadingStart());
    const backend = new API();
    try {
      const response = await backend.fetch(
        API.getAllInvoceHistory(id, staff, status, search),
        {
          method: "GET",
        }
      );
      // ToastMessage(response);

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

export const getstaffAvailabiltyCalendar = createAsyncThunk(
  "getstaffAvailabiltyCalendar/get",
  async (id, { rejectWithValue, dispatch }) => {
    dispatch(loadingStart());
    const backend = new API();
    try {
      const response = await backend.fetch(API.staffAvailabiltyCalendar(id), {
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

export const staffAvailabiltyCalendarAdd = createAsyncThunk(
  "staffAvailabiltyCalendarAdd/post",
  async ({ data, id }, { rejectWithValue, dispatch }) => {
    dispatch(loadingStart());
    try {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }

      const backend = new API();
      const response = await backend.fetch(API.staffAvailabiltyCalendarAdd(), {
        method: "POST",
        body: formData,
      });
      dispatch(loadingEnd());
      if (response.status === true) {
        // dispatch(inventoryProductListSlice({ page: 1, per_page: 2 }));
        dispatch(getstaffAvailabiltyCalendar(id));
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
export const staffAvailabiltyHours = createAsyncThunk(
  "staffAvailabiltyHours/post",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(loadingStart());
    try {
      const formData = new FormData();
      let newData = data?.hours?.filter((data) => data?.available);
      data.hours = JSON.stringify(newData);
      for (const key in data) {
        formData.append(key, data[key]);
      }

      const backend = new API();
      const response = await backend.fetch(API.staffAvailabiltyHours(), {
        method: "POST",
        body: formData,
      });
      dispatch(loadingEnd());
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

export const getAllServicesTaken = createAsyncThunk(
  "getAllServicesTaken/get",
  async ({ id, search }, { rejectWithValue, dispatch }) => {
    dispatch(loadingStart());
    const backend = new API();
    try {
      const response = await backend.fetch(API.allServicesTaken(id, search), {
        method: "GET",
      });
      // ToastMessage(response);

      dispatch(loadingEnd());
      // You may want to return some data here if needed
      return response;
    } catch (error) {
      dispatch(loadingEnd());
      console.error("Error Fetching allServicesTaken:", error);
      // You can handle the error here or throw it again if needed
      return rejectWithValue(error);
    }
  }
);

export const addReminder = createAsyncThunk(
  "addReminder/post",
  async ({ data, id }, { rejectWithValue, dispatch }) => {
    dispatch(loadingStart());
    try {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }

      const backend = new API();
      const response = await backend.fetch(API.addReminder(id), {
        method: "POST",
        body: formData,
      });
      dispatch(loadingEnd());
      // You may want to return some data here if needed
      ToastMessage(response);
      if (response.status === true) {
        dispatch(getAllServicesTaken({ id: id }));
      }
      return response;
    } catch (error) {
      dispatch(loadingEnd());
      console.error("Error Adding addReminder:", error);
      // You can handle the error here or throw it again if needed
      return rejectWithValue(error);
    }
  }
);

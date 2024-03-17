import { createSlice } from "@reduxjs/toolkit";
import {
  staffAdd,
  staffList,
  staffEdit,
  getStaffAvailabilty,
  getAllAppointments,
  getAllInvoceHistory,
  getstaffAvailabiltyCalendar,
  staffAvailabiltyCalendarAdd,
  staffAvailabiltyHours,
  getAllServicesTaken,
  addReminder,
} from "./index";

const staffSlice = createSlice({
  name: "staffSlice",
  initialState: {
    listStaff: {},
    listStaffAvailabilty: {},
    listAllAppointments: {},
    listAllInvoceHistory: {},
    AllStaffAvailabiltyCalendar: {},
    AddStaffAvailabiltyCalendar: {},
    staffAvailabiltyHourLites: {},
    allservicesTakenList: {},
    addStaff: {},
    reminderAdd: {},
    editStaff: {},
    error: null,
  },
  reducers: {
    clearAddStaff: (state) => {
      state.addStaff = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(staffAdd.pending, (state) => {})
      .addCase(staffAdd.fulfilled, (state, action) => {
        state.addStaff = action.payload;
      })
      .addCase(staffAdd.rejected, (state, action) => {
        state.error = action.payload; // Make sure to handle the rejection correctly
      })
      .addCase(staffList.pending, (state) => {})
      .addCase(staffList.fulfilled, (state, action) => {
        state.listStaff = action.payload;
      })
      .addCase(staffList.rejected, (state, action) => {
        state.error = action.payload; // Make sure to handle the rejection correctly
      })
      .addCase(staffEdit.pending, (state) => {})
      .addCase(staffEdit.fulfilled, (state, action) => {
        state.editStaff = action.payload;
      })
      .addCase(staffEdit.rejected, (state, action) => {
        state.error = action.payload; // Make sure to handle the rejection correctly
      })
      .addCase(getStaffAvailabilty.pending, (state) => {})
      .addCase(getStaffAvailabilty.fulfilled, (state, action) => {
        state.listStaffAvailabilty = action.payload;
      })
      .addCase(getStaffAvailabilty.rejected, (state, action) => {
        state.error = action.payload; // Make sure to handle the rejection correctly
      })
      .addCase(getAllAppointments.pending, (state) => {})
      .addCase(getAllAppointments.fulfilled, (state, action) => {
        state.listAllAppointments = action.payload;
      })
      .addCase(getAllAppointments.rejected, (state, action) => {
        state.error = action.payload; // Make sure to handle the rejection correctly
      })
      .addCase(getAllInvoceHistory.pending, (state) => {})
      .addCase(getAllInvoceHistory.fulfilled, (state, action) => {
        state.listAllInvoceHistory = action.payload;
      })
      .addCase(getAllInvoceHistory.rejected, (state, action) => {
        state.error = action.payload; // Make sure to handle the rejection correctly
      })
      .addCase(getstaffAvailabiltyCalendar.pending, (state) => {})
      .addCase(getstaffAvailabiltyCalendar.fulfilled, (state, action) => {
        state.AllStaffAvailabiltyCalendar = action.payload;
      })
      .addCase(getstaffAvailabiltyCalendar.rejected, (state, action) => {
        state.error = action.payload; // Make sure to handle the rejection correctly
      })
      .addCase(staffAvailabiltyCalendarAdd.pending, (state) => {})
      .addCase(staffAvailabiltyCalendarAdd.fulfilled, (state, action) => {
        state.AddStaffAvailabiltyCalendar = action.payload;
      })
      .addCase(staffAvailabiltyCalendarAdd.rejected, (state, action) => {
        state.error = action.payload; // Make sure to handle the rejection correctly
      })
      .addCase(staffAvailabiltyHours.pending, (state) => {})
      .addCase(staffAvailabiltyHours.fulfilled, (state, action) => {
        state.staffAvailabiltyHourLites = action.payload;
      })
      .addCase(staffAvailabiltyHours.rejected, (state, action) => {
        state.error = action.payload; // Make sure to handle the rejection correctly
      })
      .addCase(getAllServicesTaken.pending, (state) => {})
      .addCase(getAllServicesTaken.fulfilled, (state, action) => {
        state.allservicesTakenList = action.payload;
      })
      .addCase(getAllServicesTaken.rejected, (state, action) => {
        state.error = action.payload; // Make sure to handle the rejection correctly
      })
      .addCase(addReminder.pending, (state) => {})
      .addCase(addReminder.fulfilled, (state, action) => {
        state.reminderAdd = action.payload;
      })
      .addCase(addReminder.rejected, (state, action) => {
        state.error = action.payload; // Make sure to handle the rejection correctly
      });
  },
});

export const { clearAddStaff } = staffSlice.actions;
export default staffSlice.reducer;

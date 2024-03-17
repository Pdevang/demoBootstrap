import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./setLoading/setLoading";
import authSessionSlice from "./authSession/authSession";
import inventoryProductSlice from "./inventory/inventorySlice";
import packagesSlice from "./membership/membershipSlice";
import appointmentSlice from "./appointment/appointmentSlice";
import staffSlice from "./staff/staffSlice";
import enqiurySlice from "./enquiry/enquirySlice";
import clientSlice from "./client/clientSlice";
import recordSaleSlice from "./sales/recordSaleSlice";
import insightSlice from "./insight/insightSlice";
import dashboardSlice from "./dashboard/dashboardSlice";
import miniWebsiteSlice from "./miniWebsite/miniWebsiteSlice";
import marketingSlice from "./marketing/marketingSlice";
const store = configureStore({
  reducer: {
    authSession: authSessionSlice,
    loader: loaderSlice,
    inventory: inventoryProductSlice,
    packges: packagesSlice,
    appointment: appointmentSlice,
    staff: staffSlice,
    client: clientSlice,
    enqiury: enqiurySlice,
    record: recordSaleSlice,
    insight: insightSlice,
    dashboard: dashboardSlice,
    miniWebsite: miniWebsiteSlice,
    marketing: marketingSlice,
  },
});

export default store;

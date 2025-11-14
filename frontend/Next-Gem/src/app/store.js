// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import leadsReducer from "../features/leads/leadsSlice";
import activitiesReducer from "../features/activities/activitiesSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        leads: leadsReducer,
        activities: activitiesReducer,
    },
});

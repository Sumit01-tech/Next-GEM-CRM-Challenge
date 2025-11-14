// src/features/activities/activitiesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const activitiesSlice = createSlice({
    name: "activities",
    initialState: { list: [] },
    reducers: {
        addActivity: (state, action) => {
            state.list.push(action.payload);
        },
    },
});

export const { addActivity } = activitiesSlice.actions;
export default activitiesSlice.reducer;

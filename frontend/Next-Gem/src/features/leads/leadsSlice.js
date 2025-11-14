// src/features/leads/leadsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchLeads = createAsyncThunk("leads/fetchLeads", async () => {
    const res = await api.get("/leads");
    return res.data;
});

const leadsSlice = createSlice({
    name: "leads",
    initialState: { items: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLeads.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLeads.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchLeads.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default leadsSlice.reducer;

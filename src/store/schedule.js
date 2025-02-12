import { createSlice } from '@reduxjs/toolkit';

const initialState = { scheduleItems: [] };

const scheduleSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    addScheduleItems: (state, action) => {
      state.scheduleItems.push(action.payload);
      console.log("add schedule reducer");
    },
    removeScheduleItems: (state, action) => {
      state.scheduleItems = state.scheduleItems.filter((x) => x.name !== action.payload);
    },
  }
});

export const { addScheduleItems, removeScheduleItems } = scheduleSlice.actions;

export default scheduleSlice.reducer;
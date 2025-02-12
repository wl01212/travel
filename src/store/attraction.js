import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  schedules: [
    {
      scheduleId: "1",
      scheduleName: "範例行程",
      time: "2024-10-05",
      landmarks: [],
    },
  ],
};
const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    addScheduleItems: (state, action) => {
      const { scheduleName, scheduleId, time, landmarks, landmark } =
        action.payload;
      let isDuplicate = state.schedules.find(
        (item) => item.scheduleName === scheduleName
      );
      if (!state.schedules) {
        console.error("State schedules is undefined");
        return;
      }
      if (!isDuplicate) {
        state.schedules.push({
          scheduleId,
          scheduleName,
          time,
          landmarks,
        });
        return;
      }
      console.log("行程名稱重複，無法添加");
      const existingSchedule = state.schedules.find(
        (schedule) => schedule.scheduleName === scheduleName
      );
      if (existingSchedule) {
        // 檢查是否已存在相同的地標，避免重複添加
        const existingLandmark = existingSchedule.landmarks.find(
          (l) => l.name === landmark.name
        );
        if (!existingLandmark) {
          // 如果沒有找到相同的 landmark，添加新的 landmark
          existingSchedule.landmarks.push(landmark);
        }
        // 如果地標已存在，則不進行任何操作
      } else {
        // 如果沒有找到對應的 scheduleName，新增一個新項目
        state.schedules.push({
          scheduleName: scheduleName,
          landmarks: [landmark],
        });
      }
    },
    removeScheduleItems: (state, action) => {
      const { scheduleName, landmarkName } = action.payload;
      const scheduleIndex = state.schedules.findIndex(
        (schedule) => schedule.scheduleName === scheduleName
      );
      if (scheduleIndex !== -1) {
        const landmarks = state.schedules[scheduleIndex].landmarks;
        const filteredLandmarks = landmarks.filter(
          (landmark) => landmark.name !== landmarkName
        );
        state.schedules[scheduleIndex].landmarks = filteredLandmarks;
      }
    },
  },
});

// export state to global
export const { addScheduleItems, removeScheduleItems } = scheduleSlice.actions;
export default scheduleSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import currentJobSlice from "./reducers/currentJobSlice";
import jobListSlice from "./reducers/jobListSlice";

export const store = configureStore({
    reducer: {
        jobListSlice,
        currentJobSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
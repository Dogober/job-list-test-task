import { configureStore } from "@reduxjs/toolkit";
import jobListSlice from "./reducers/jobListSlice";

export const store = configureStore({
    reducer: {
        jobListSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
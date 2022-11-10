import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Job } from "../../models/Job";

interface JobState {
    jobs: Job[];
    isLoading: boolean;
    error: string
}

const initialState: JobState = {
    jobs: [],
    isLoading: false,
    error: ''
}

export const jobListSlice = createSlice({
    name: 'jobList',
    initialState,
    reducers: {
        jobListFetching(state) {
            state.isLoading = true
        },
        jobListFetchingSuccess(state, action: PayloadAction<Job[]>) {
            state.isLoading = false
            state.error = ''
            state.jobs = action.payload
        },
        jobListFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default jobListSlice.reducer
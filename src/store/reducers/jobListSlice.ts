import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DisplayJob } from "../../models/DisplayJob";
import { Job } from "../../models/Job";
import { getCurrentPage } from "../../utilities/getCurrentPage";

export interface JobState {
    jobs: Job[]
    displayJobs: DisplayJob[]
    isLoading: boolean
    error: string
    currentPage: number
    limit: number
}

const initialState: JobState = {
    jobs: [],
    displayJobs: [],
    isLoading: false,
    error: '',
    currentPage: 1,
    limit: 15,
}

export const jobListSlice = createSlice({
    name: 'jobList',
    initialState,
    reducers: {
        jobListFetching(state) {
            state.isLoading = true
            state.error = ''
        },
        jobListFetchingSuccess(state, action: PayloadAction<Job[]>) {
            state.isLoading = false
            state.error = ''
            state.jobs = action.payload
            state.displayJobs = getCurrentPage(state)
        },
        jobListFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        changingPage(state, action: PayloadAction<number>){
            state.currentPage = action.payload
            state.displayJobs = getCurrentPage(state)
        },
    }
})

export default jobListSlice.reducer
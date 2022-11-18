import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Job } from "../../models/Job";
import { convertingSomeData } from "../../utilities/convertingSomeData";
import { slicingJobsArray } from "../../utilities/slicingJobsArray";

export interface JobState {
    jobs: Job[]
    displayedJobs: Job[]
    isLoading: boolean
    error: string
    currentPage: number
    limit: number
}

const initialState: JobState = {
    jobs: [],
    displayedJobs: [],
    isLoading: false,
    error: '',
    currentPage: 1,
    limit: 2,
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
            state.displayedJobs = slicingJobsArray(state)
            for (let i = 0; i < state.jobs.length; i++) {
                convertingSomeData(state.jobs[i], false) 
            }
        },
        jobListFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        changingPage(state, action: PayloadAction<number>){
            state.currentPage = action.payload
            state.displayedJobs = slicingJobsArray(state)
        }
    }
})

export default jobListSlice.reducer
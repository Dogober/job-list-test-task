import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Job } from "../../models/Job";
import { convertingSomeData } from "../../utilities/convertingSomeData";

interface JobState {
    currentJob: Job | null
    isLoading: boolean
    error: string
}

const initialState: JobState = {
    currentJob: null,
    isLoading: false,
    error: ''
}

export const currentJobSlice = createSlice({
    name: 'currentJob',
    initialState,
    reducers: {
        currentJobFetching(state) {
            state.isLoading = true
        },
        currentJobFetchingSuccess(state, action: PayloadAction<Job>) {
            state.isLoading = false
            state.error = ''
            state.currentJob = action.payload
            convertingSomeData(state.currentJob, true)
        },
        currentJobFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default currentJobSlice.reducer
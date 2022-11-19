import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DetailsDisplayJob } from "../../models/DetailsDisplayJob";
import { Job } from "../../models/Job";
import { convertJobToDetailsDisplayData } from "../../utilities/convertJobToDetailsDisplayData";

interface JobState {
    currentJob: Job | null
    detailsDisplayJob: DetailsDisplayJob | null
    isLoading: boolean
    error: string
}

const initialState: JobState = {
    currentJob: null,
    detailsDisplayJob: null,
    isLoading: false,
    error: ''
}

export const currentJobSlice = createSlice({
    name: 'currentJob',
    initialState,
    reducers: {
        currentJobFetching(state) {
            state.isLoading = true
            state.error = ''
        },
        currentJobFetchingSuccess(state, action: PayloadAction<Job>) {
            state.isLoading = false
            state.error = ''
            state.currentJob = action.payload
            state.detailsDisplayJob = convertJobToDetailsDisplayData(state.currentJob)
        },
        currentJobFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default currentJobSlice.reducer
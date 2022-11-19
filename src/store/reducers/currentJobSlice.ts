import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DetailsDisplayJob } from "../../models/DetailsDisplayJob";
import { Job } from "../../models/Job";
import { convertJobToDetailsDisplayData } from "../../utilities/convertJobToDetailsDisplayData";

interface JobState {
    currentJob: Job | null
    detailsDisplayJob: DetailsDisplayJob | null
    isLoading: boolean
    errorDetails: string
}

const initialState: JobState = {
    currentJob: null,
    detailsDisplayJob: null,
    isLoading: false,
    errorDetails: ''
}

export const currentJobSlice = createSlice({
    name: 'currentJob',
    initialState,
    reducers: {
        currentJobFetching(state) {
            state.isLoading = true
            state.errorDetails = ''
        },
        currentJobFetchingSuccess(state, action: PayloadAction<Job>) {
            state.isLoading = false
            state.errorDetails = ''
            state.currentJob = action.payload
            state.detailsDisplayJob = convertJobToDetailsDisplayData(state.currentJob)
        },
        currentJobFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.errorDetails = action.payload
        }
    }
})

export default currentJobSlice.reducer
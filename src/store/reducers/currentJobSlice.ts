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
            const element = state.currentJob
            convertingSomeData(element, 'arrayOfPictures')
            const responsopilitiesStr = 'Responsopilities:'
            const benefitsStr = 'Compensation & Benefits:'
            const responsopilitiesIndex = element.description.indexOf(responsopilitiesStr)
            const benefitsIndex = element.description.indexOf(benefitsStr)
            const benefits = element.description
                .substring(benefitsIndex+benefitsStr.length, element.description.length-1)
            const title = element.description.substring(0, responsopilitiesIndex)
            const responsopilities = element.description
                .substring(responsopilitiesIndex+responsopilitiesStr.length, benefitsIndex)
            element.convertedDescription = {
                title,
                responsopilities,
                benefits: benefits.split('.')
            }
        },
        currentJobFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default currentJobSlice.reducer
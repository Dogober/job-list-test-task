import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import { Job } from "../../models/Job";
import { randomizer } from "../../utilities/randomizer";

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
            element.updatedAt = moment(element.updatedAt, "YYYY-MM-DDThh:mm:ss").fromNow()
            element.title = element.title.slice(0, element.title.length-1)
            element.salary = element.salary.replace(/k/g, ' 000')
            for (let j = 0; j < element.pictures.length; j++) {
                element.pictures[j] = element.pictures[j].replace('300', '116')
                element.pictures[j] = element.pictures[j] + `?random=${randomizer(1000)}`
            }
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
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import { Job } from "../../models/Job";
import { randomizer } from "../../utilities/randomizer";

interface JobState {
    jobs: Job[]
    currentJob: Job | null
    isLoading: boolean
    error: string
}

const initialState: JobState = {
    jobs: [],
    currentJob: null,
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
        
            for (let i = 0; i < state.jobs.length; i++) {
                const element = state.jobs[i]
                element.updatedAt = moment(element.updatedAt, "YYYY-MM-DDThh:mm:ss").fromNow()
                element.title = element.title.slice(0, element.title.length-1)
                element.salary = element.salary.replace(/k/g, ' 000')
                for (let j = 0; j < element.pictures.length; j++) {
                    state.jobs[i].pictures[j] = state.jobs[i].pictures[j] + `?random=${randomizer(1000)}`
                }
                element.rating = []
                while (element.rating.length <= randomizer(5)-1) {
                    element.rating.push('')
                }
                const responsopilitiesIndex = element.description.indexOf('Responsopilities:')
                const benefitsIndex = element.description.indexOf('Compensation & Benefits:')
                let benefits = element.description
                    .substring(benefitsIndex+'Compensation & Benefits:'.length, element.description.length-1)
                element.convertedDescription = {
                    title: element.description.substring(0, responsopilitiesIndex),
                    responsopilities: element.description.substring(
                        responsopilitiesIndex+'Responsopilities:'.length, benefitsIndex
                        ),
                    benefits: benefits.split('.')
                }
            }
        },
        jobListFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        currentJobFetching(state, action: PayloadAction<string | undefined>){
            state.currentJob = state.jobs.filter(job => job.id === action.payload)[0]
        }
    }
})

export default jobListSlice.reducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import { Job } from "../../models/Job";
import { randomizer } from "../../utilities/randomizer";

interface JobState {
    jobs: Job[]
    displayedJobs: Job[]
    currentJob: Job | null
    isLoading: boolean
    error: string
    currentPage: number
    limit: number
}

const initialState: JobState = {
    jobs: [],
    displayedJobs: [],
    currentJob: null,
    isLoading: false,
    error: '',
    currentPage: 1,
    limit: 1
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
            state.displayedJobs = state.jobs.slice(
                (state.currentPage-1)*state.limit, state.limit*state.currentPage > state.jobs.length 
                    ?state.jobs.length
                    :state.limit*state.currentPage
                )
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
            }
        },
        jobListFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        currentJobFetching(state, action: PayloadAction<string | undefined>){
            state.currentJob = state.displayedJobs.filter(job => job.id === action.payload)[0]
        },
        changingPage(state, action: PayloadAction<number>){
            state.currentPage = action.payload
            state.displayedJobs = state.jobs.slice(
                (state.currentPage-1)*state.limit, state.limit*state.currentPage > state.jobs.length 
                    ?state.jobs.length
                    :state.limit*state.currentPage
            )
        }
    }
})

export default jobListSlice.reducer
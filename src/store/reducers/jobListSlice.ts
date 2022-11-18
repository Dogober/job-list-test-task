import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import { Job } from "../../models/Job";
import { randomizer } from "../../utilities/randomizer";

interface JobState {
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
            state.displayedJobs = state.jobs.slice(
                (state.currentPage-1)*state.limit, state.limit*state.currentPage > state.jobs.length 
                    ?state.jobs.length
                    :state.limit*state.currentPage
                )
            for (let i = 0; i < state.jobs.length; i++) {
                const element = state.jobs[i]
                element.updatedAt = moment(element.updatedAt, "YYYY-MM-DDThh:mm:ss").fromNow()
                element.title = element.title.slice(0, element.title.length-1)
                element.avatar = state.jobs[i].pictures[0] + `?random=${randomizer(1000)}`
                element.rating = []
                while (element.rating.length <= randomizer(5)-1) {
                    element.rating.push('')
                }
            }
        },
        jobListFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
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
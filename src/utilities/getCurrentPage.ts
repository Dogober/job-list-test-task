import { DisplayJob } from "../models/DisplayJob";
import { JobState } from "../store/reducers/jobListSlice";
import { convertJobToDisplayJobData } from "./convertJobToDisplayJobData";

export const getCurrentPage = (state: JobState): DisplayJob[] => {
    state.displayJobs = convertJobToDisplayJobData(state)
    return state.displayJobs.slice(
        (state.currentPage-1)*state.limit, state.limit*state.currentPage > state.jobs.length 
            ?state.jobs.length
            :state.limit*state.currentPage
    )
}
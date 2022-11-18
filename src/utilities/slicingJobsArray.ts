import { Job } from "../models/Job";
import { JobState } from "../store/reducers/jobListSlice";

export const slicingJobsArray = (state: JobState): Job[] => {
    return state.jobs.slice(
        (state.currentPage-1)*state.limit, state.limit*state.currentPage > state.jobs.length 
            ?state.jobs.length
            :state.limit*state.currentPage
    )
}
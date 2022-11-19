import { DisplayJob } from "../models/DisplayJob";
import { Job } from "../models/Job";
import { JobState } from "../store/reducers/jobListSlice";
import { convertPictures } from "./convertPictures";
import { convertTitle } from "./convertTitle";
import { convertupdateAt } from "./convertupdateAt";
import { randomizer } from "./randomizer";

export const getCurrentPage = (state: JobState): DisplayJob[] => {
    state.displayJobs = []
    for (let i = 0; i < state.jobs.length; i++) {
        const job = state.jobs[i]
        state.displayJobs.push({
            address: job.address,
            employment_type: job.employment_type,
            id: job.id,
            name: job.name,
            title: convertTitle(job.title),
            updatedAt: convertupdateAt(job.updatedAt),
            rating: randomizer(5),
            avatar: convertPictures(job.pictures[0])
        })
    }
    
    return state.displayJobs.slice(
        (state.currentPage-1)*state.limit, state.limit*state.currentPage > state.jobs.length 
            ?state.jobs.length
            :state.limit*state.currentPage
    )
}
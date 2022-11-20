import { DisplayJob } from "../models/DisplayJob";
import { JobState } from "../store/reducers/jobListSlice";
import convertUtilities from "./convertUtilities";
import { randomizer } from "./randomizer";

const {convertPictures, convertTitle, convertupdateAt} = convertUtilities

export const convertJobToDisplayJobData = (state: JobState): DisplayJob[] => {
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
            avatar: convertPictures(job.pictures[0], '90', '90')
        })
    }
    return state.displayJobs
}
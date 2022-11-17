import { Job } from "../models/Job";

export const calcPages = (limit: number, jobs: Job[]): string[] => {
    const numberOfPages = Math.ceil(jobs.length/limit)
    return Array(numberOfPages).fill('')
}
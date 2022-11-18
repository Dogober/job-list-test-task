import moment from "moment";
import { Job } from "../models/Job";
import { randomizer } from "./randomizer";

export const convertingSomeData = (job: Job, pictureType: string) => {
    job.updatedAt = moment(job.updatedAt, "YYYY-MM-DDThh:mm:ss").fromNow()
    job.title = job.title.slice(0, job.title.length-1)
    if (pictureType === 'picture') {
        job.avatar = job.pictures[0] + `?random=${randomizer(1000)}`
    } else {
        for (let j = 0; j < job.pictures.length; j++) {
            job.pictures[j] = job.pictures[j].replace('300', '116')
            job.pictures[j] = job.pictures[j] + `?random=${randomizer(1000)}`
        }
    }
}
import moment from "moment";
import { Job } from "../models/Job";
import { randomizer } from "./randomizer";

export const convertingSomeData = (job: Job, isCurrentJob: boolean) => {
    job.updatedAt = moment(job.updatedAt, "YYYY-MM-DDThh:mm:ss").fromNow()
    job.title = job.title.slice(0, job.title.length-1)
    if (isCurrentJob === false) {
        job.avatar = job.pictures[0] + `?random=${randomizer(1000)}`
        job.rating = []
        while (job.rating.length <= randomizer(5)-1) {
            job.rating.push('')
        }
    } else {
        for (let j = 0; j < job.pictures.length; j++) {
            job.pictures[j] = job.pictures[j].replace('300', '116')
            job.pictures[j] = job.pictures[j] + `?random=${randomizer(1000)}`
        }
        const responsopilitiesStr = 'Responsopilities:'
        const benefitsStr = 'Compensation & Benefits:'
        const responsopilitiesIndex = job.description.indexOf(responsopilitiesStr)
        const benefitsIndex = job.description.indexOf(benefitsStr)
        const benefits = job.description
            .substring(benefitsIndex+benefitsStr.length, job.description.length-1)
        const title = job.description.substring(0, responsopilitiesIndex)
        const responsopilities = job.description
            .substring(responsopilitiesIndex+responsopilitiesStr.length, benefitsIndex)
        job.convertedDescription = {
            title,
            responsopilities,
            benefits: benefits.split('.')
        }    
    }
}
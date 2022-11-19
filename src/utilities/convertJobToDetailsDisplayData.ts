import { DetailsDisplayJob } from "../models/DetailsDisplayJob";
import { Job } from "../models/Job";
import { convertPictures } from "./convertPictures";
import { convertTitle } from "./convertTitle";
import { convertupdateAt } from "./convertupdateAt";

export const convertJobToDetailsDisplayData = (job: Job): DetailsDisplayJob => {
    
    const detailsDisplayJob = {
        address: job.address,
        benefits: job.benefits,
        description: job.description,
        email: job.email,
        employment_type: job.employment_type,
        id: job.id,
        location: job.location,
        name: job.name,
        phone: job.phone,
        pictures: job.pictures,
        salary: job.salary.replace(/k/g, ' 000'),
        title: convertTitle(job.title),
        updatedAt: convertupdateAt(job.updatedAt),
        convertedDescription: {
            title: '',
            responsopilities: '',
            benefits: [""]
        }
    }

    for (let i = 0; i < detailsDisplayJob.pictures.length; i++) {
        detailsDisplayJob.pictures[i] = convertPictures(detailsDisplayJob!.pictures[i], '200', '116')
    }
    const responsopilitiesStr = 'Responsopilities:'
    const benefitsStr = 'Compensation & Benefits:'
    const responsopilitiesIndex = job.description.indexOf(responsopilitiesStr)
    const benefitsIndex = job.description.indexOf(benefitsStr)
    const title = job.description.substring(0, responsopilitiesIndex)
    if (responsopilitiesIndex !== -1 || benefitsIndex !== -1) {
        const benefits = job.description
            .substring(benefitsIndex+benefitsStr.length, job.description.length-1)
        const responsopilities = job.description
            .substring(responsopilitiesIndex+responsopilitiesStr.length, benefitsIndex)
        detailsDisplayJob.convertedDescription = {
            title,
            responsopilities,
            benefits: benefits.split('.')
        }
    } else {
        detailsDisplayJob.convertedDescription = {
            title,
            responsopilities: '',
            benefits: [""]
        }
    }
    return detailsDisplayJob
}
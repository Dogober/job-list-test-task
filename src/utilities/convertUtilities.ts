import moment from "moment"
import { randomizer } from "./randomizer"

const convertUtilities = {

    convertupdateAt: (jobUpdatedAt: string): string => {
        return moment(jobUpdatedAt, "YYYY-MM-DDThh:mm:ss").fromNow()
    },
    convertPictures: (picture: string, width: string, heigh: string): string => {
        const pictureUrl = new URL(picture)
        pictureUrl.pathname = '/' + width + '/' + heigh
        pictureUrl.searchParams.append('id', `${randomizer(1000)}`)
        return pictureUrl.toString()
    },
    convertTitle: (jobTitle: string): string => {
        return jobTitle.slice(0, jobTitle.length-1)
    }
}

export default convertUtilities
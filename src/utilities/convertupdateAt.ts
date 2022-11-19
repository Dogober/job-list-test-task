import moment from "moment"

export const convertupdateAt = (jobUpdatedAt: string): string => {
    return moment(jobUpdatedAt, "YYYY-MM-DDThh:mm:ss").fromNow()
}
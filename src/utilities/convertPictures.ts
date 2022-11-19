import { randomizer } from "./randomizer"

export const convertPictures = (picture: string, width: string, heigh: string): string => {
    const pictureUrl = new URL(picture)
    pictureUrl.pathname = '/' + width + '/' + heigh
    pictureUrl.searchParams.append('id', `${randomizer(1000)}`)
    return pictureUrl.toString()
}
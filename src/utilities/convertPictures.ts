import { randomizer } from "./randomizer"

export const convertPictures = (picture: string, width: string, heigh: string): string => {
    let converPicture = ''
    converPicture = picture.replace('200', width)
    converPicture = converPicture.replace('300', heigh) + `?random=${randomizer(1000)}`
    return converPicture
}
import { randomizer } from "./randomizer"

export const convertPictures = (picture: string): string => {
    return picture.replace('300', '116') + `?random=${randomizer(1000)}`
}
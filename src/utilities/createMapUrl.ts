import { DetailsDisplayJob } from "../models/DetailsDisplayJob"

export const createMapUrl = (job: DetailsDisplayJob, width: string): string => {
    const mapUrl = new URL("https://maps.geoapify.com/v1/staticmap")
    mapUrl.searchParams.append("style", "osm-carto")
    mapUrl.searchParams.append("width", width)
    mapUrl.searchParams.append("height", "218")
    mapUrl.searchParams.append("center", `lonlat:${job.location.long},${job.location.lat}`)
    mapUrl.searchParams.append("zoom", "14")
    mapUrl.searchParams.append("marker", `lonlat:${job.location.long},${job.location.lat};color:#dfe0e6;size:medium`)
    mapUrl.searchParams.append("apiKey", "193d563e45214fb5acec45775c93247f")
    return mapUrl.toString()
}
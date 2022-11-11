import { AppDispatch } from "../store";
import axios, { AxiosError } from 'axios'
import {jobListSlice} from "./jobListSlice";
import { Job } from "../../models/Job";

const bearerToken = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'

export const fetchJobList = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(jobListSlice.actions.jobListFetching())
        const response = await axios.get<Job[]>('https://api.json-generator.com/templates/ZM1r0eic3XEy/data', {
            params: {
                access_token: bearerToken,
            }
        })
        dispatch(jobListSlice.actions.jobListFetchingSuccess(response.data))
    } catch (error) {
        const e = error as AxiosError
        dispatch(jobListSlice.actions.jobListFetchingError(e.message))
    }
}
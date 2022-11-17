import { AppDispatch } from "../store";
import axios, { AxiosError } from 'axios'
import {jobListSlice} from "./jobListSlice";
import { Job } from "../../models/Job";

const access_token = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'

export const fetchJobList = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(jobListSlice.actions.jobListFetching())
        const response = await axios.get<Job[]>('/job.json') 
            // params: {
            //     access_token,
            // }
        setTimeout(() => {
            dispatch(jobListSlice.actions.jobListFetchingSuccess(response.data))
        }, 1000)
    } catch (error) {
        const e = error as AxiosError
        dispatch(jobListSlice.actions.jobListFetchingError(e.message))
    }
}
export const fetchCurrentJob = (id: string | undefined) => (dispatch: AppDispatch) => {
        dispatch(jobListSlice.actions.currentJobFetching(id))
    }
export const changePage = (page: number) => (dispatch: AppDispatch) => {
    dispatch(jobListSlice.actions.changingPage(page))
}
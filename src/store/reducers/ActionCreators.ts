import { AppDispatch } from "../store";
import axios, { AxiosError } from 'axios'
import {jobListSlice} from "./jobListSlice";
import { Job } from "../../models/Job";
import { currentJobSlice } from "./currentJobSlice";

const access_token = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
const url = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data'

export const fetchJobList = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(jobListSlice.actions.jobListFetching())
        const response = await axios.get<Job[]>(url, {
            params: {
                access_token
            }
        })
        setTimeout(() => {
            dispatch(jobListSlice.actions.jobListFetchingSuccess(response.data))
        }, 1000)
    } catch (error) {
        const e = error as AxiosError
        dispatch(jobListSlice.actions.jobListFetchingError(e.message))
    }
}
export const fetchCurrentJob = (id: string | undefined) => async (dispatch: AppDispatch) => {
    try {
        dispatch(currentJobSlice.actions.currentJobFetching())
        const response = await axios.get<Job[]>(url, {
            params: {
                access_token
            }
        })
        const currentJob = response.data.filter(job => job.id === id)[0]
        setTimeout(() => {
            dispatch(currentJobSlice.actions.currentJobFetchingSuccess(currentJob))
        }, 1000)
    } catch (error) {
        const e = error as AxiosError
        dispatch(currentJobSlice.actions.currentJobFetchingError(e.message))
    }
}
export const changePage = (page: number) => (dispatch: AppDispatch) => {
    dispatch(jobListSlice.actions.changingPage(page))
}
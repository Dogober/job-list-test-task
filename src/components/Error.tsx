import { FC } from 'react';
import { useAppSelector } from '../hooks/redux';

interface ErrorProps {
    errorPlace: string
}

const Error: FC<ErrorProps> = ({errorPlace}) => {

    const {error} = useAppSelector(state => state.jobListSlice)
    const {errorDetails} = useAppSelector(state => state.currentJobSlice)

    if (errorPlace === "JobList") {
        return (
            <div className="bg-[#F5F5F5] flex w-full h-screen items-center justify-center text-[#3A4562] font-bold text-4xl px-8 py-8">
                {error}
            </div>
        )
    } else {
        return (
            <div className=" bg-white flex w-full h-screen items-center justify-center text-[#3A4562] font-bold text-4xl px-8 py-8">
                {errorDetails}
            </div>
        )
    }
}

export default Error;
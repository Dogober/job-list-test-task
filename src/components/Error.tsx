import { FC } from 'react';
import { useAppSelector } from '../hooks/redux';

const Error: FC = () => {

    const {error} = useAppSelector(state => state.jobListSlice)

    return (
        <div className="bg-[#F5F5F5] flex w-full h-screen items-center justify-center text-[#3A4562] font-bold text-4xl px-8 py-8">
            {error}
        </div>
    );
};

export default Error;
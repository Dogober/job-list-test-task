import { FC } from 'react';
import { useAppSelector } from '../hooks/redux';

const AttachedImages: FC = () => {

    const {currentJob} = useAppSelector(state => state.currentJobSlice)

    return (
        <>
            <div className="border-b pb-2 font-bold text-3xl mt-20 mb-6">
                Attached images
            </div>
            <div className="flex gap-3 max-[640px]:overflow-x-auto scrollbar scrollbar-thumb-[#3A4562]/[.4] scroll-py-3">
                {currentJob?.pictures.map((picture, i) =>
                <img
                    className="rounded-lg mb-6 max-[640px]:mb-2"
                    key={i}
                    src={picture}/>
                )}
            </div>
        </>
    );
};

export default AttachedImages;
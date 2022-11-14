import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchCurrentJob } from '../store/reducers/ActionCreators';
import NoteIcon from './NoteIcon';
import ShareIcon from './ShareIcon';

const CurrentJobDetalis: FC = () => {
    
    const params = useParams()
    const {currentJob} = useAppSelector(state => state.jobListSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchCurrentJob(params.id))
    }, [])

    return (
        <div className="flex flex-col max-w-[720px] w-full text-[#3A4562] font-sans ">
            <header className="flex gap-8 border-b pb-2">
                <div className="font-bold text-3xl flex-auto">Job Detalis</div>
                <div className="flex gap-4 items-center">
                    <NoteIcon/>
                    <div className="font-normal text-lg">
                        Save to my list
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <ShareIcon/>
                    <div className="font-normal text-lg">
                        Share
                    </div>
                </div>
            </header>
            <main>
                <button className=" mt-10 mb-8 py-[18px] px-[30px] text-xs font-semibold bg-[#384564] rounded-lg text-white">
                    APPLY NOW
                </button>
                <header className="flex justify-between font-bold gap-5">
                    <div className="max-w-[500px] text-2xl tracking-[-0.75]">
                        {currentJob?.title}
                    </div>
                    <div className="text-xl tracking-[-0.63]">
                        € {currentJob?.salary}
                        <p className="font-normal text-lg tracking-[-0.56] text">
                            Brutto, per year
                        </p>
                    </div>
                </header>
                <p className="font-normal text-lg text-[#38415D]/[.36] my-1">
                    Posted {currentJob?.updatedAt}
                </p>
                <main className="font-normal text-lg">
                    <div>
                        <p>{currentJob?.convertedDescription.title}</p>
                    </div>
                    <div>
                        <p className="mt-8 mb-3 font-bold text-xl">Responsopilities</p>
                        <p>{currentJob?.convertedDescription.responsopilities}</p>
                    </div>
                    <div>
                        <p className="mt-8 mb-3 font-bold text-xl">Compensation & Benefits:</p>
                        <ul>
                            {currentJob?.convertedDescription.benefits.map((benefit, i) =>
                            <li
                                className=" list-square list-outside last:list-none"
                                key={i}
                            >
                                {benefit}
                            </li>
                            )}
                        </ul>
                        
                    </div>
                </main>
            </main>
        </div>
    );
};

export default CurrentJobDetalis;
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchCurrentJob } from '../store/reducers/ActionCreators';
import NoteIcon from './svg/NoteIcon';
import ShareIcon from './svg/ShareIcon';
import ReturnBtn from './ui/ReturnBtn';
import AttachedImages from './AttachedImages';
import AdditionalBtn from './ui/AdditionalBtn';
import Description from './Description';
import Location from './Location';

const CurrentJobDetalis: FC = () => {
    
    const params = useParams()
    const {currentJob} = useAppSelector(state => state.jobListSlice)
    const dispatch = useAppDispatch()

    window.scrollTo(0, 0)

    useEffect(() => {
        dispatch(fetchCurrentJob(params.id))
    }, [])

    return (
        <div className="flex max-w-[1265px] w-full justify-between gap-8">
            <div className="flex flex-col max-w-[725px] text-[#3A4562] font-sans ">
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
                <Description/>
                <footer className="">
                    <div className="border-b pb-2 font-bold text-3xl mt-14">
                        Additional info
                    </div>
                    <p className="font-normal text-lg mt-5 mb-1">Employment type</p>
                    <AdditionalBtn 
                        bgColor='bg-[#A1B1DB]/[.32]'
                        borderColor='border-[#55699E]/[.3]'
                        infoAr={currentJob?.employment_type}
                    />
                    <p className="font-normal text-lg mt-5 mb-1">Benefits</p>
                    <AdditionalBtn 
                        bgColor='bg-[#FFCF00]/[.15]'
                        borderColor='border-[#FFCF00]'
                        textColor='text-[#988B49]' 
                        infoAr={currentJob?.benefits}
                    />
                    <AttachedImages/>
                    <ReturnBtn/>
                </footer>
            </div>
            <Location/>
        </div>
    );
};

export default CurrentJobDetalis;
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchCurrentJob } from '../store/reducers/ActionCreators';
import ApplyBtn from './ui/ApplyBtn';
import NoteIcon from './svg/NoteIcon';
import ShareIcon from './svg/ShareIcon';
import ReturnBtn from './ui/ReturnBtn';
import AttachedImages from './AttachedImages';
import AdditionalBtn from './ui/AdditionalBtn';
import Description from './Description';

const CurrentJobDetalis: FC = () => {
    
    const params = useParams()
    const {currentJob} = useAppSelector(state => state.jobListSlice)
    const dispatch = useAppDispatch()
    
    window.scrollTo(0, 0)

    useEffect(() => {
        dispatch(fetchCurrentJob(params.id))
    }, [])

    return (
        <div className="flex flex-col max-w-[720px] text-[#3A4562] font-sans ">
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
                <ApplyBtn/>
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
                <Description/>
            </main>
            <footer className="">
                <div className="border-b pb-2 font-bold text-3xl mt-14">
                    Additional info
                </div>
                <p className="font-normal text-lg mt-5 mb-1">Employment type</p>
                <AdditionalBtn 
                    bgColor='[#A1B1DB]/[.32]' 
                    borderColor='[#55699E]/[.3]' 
                    infoAr={currentJob?.employment_type}
                />
                <p className="font-normal text-lg mt-5 mb-1">Benefits</p>
                <AdditionalBtn 
                    bgColor='[#FFCF00]/[.15]' 
                    borderColor='[#FFCF00]' 
                    textColor='[#988B49]' 
                    infoAr={currentJob?.benefits}
                />
                <AttachedImages/>
                <ReturnBtn/>
            </footer>
        </div>
    );
};

export default CurrentJobDetalis;
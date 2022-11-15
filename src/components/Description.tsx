import { FC } from 'react';
import { useAppSelector } from '../hooks/redux';
import ApplyBtn from './ui/ApplyBtn';

const Description: FC = () => {

    const {currentJob} = useAppSelector(state => state.jobListSlice)

    return (
        <main className="font-normal text-lg">
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
            <div>
                <p>{currentJob?.convertedDescription.title}</p>
            </div>
            <div>
                <p className="mt-8 mb-3 font-bold text-xl">Responsopilities</p>
                <p>{currentJob?.convertedDescription.responsopilities}</p>
            </div>
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
            <ApplyBtn/>
        </main>
    );
};

export default Description;
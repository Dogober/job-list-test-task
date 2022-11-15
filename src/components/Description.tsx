import { FC } from 'react';
import { useAppSelector } from '../hooks/redux';
import ApplyBtn from './ui/ApplyBtn';

const Description: FC = () => {

    const {currentJob} = useAppSelector(state => state.jobListSlice)

    return (
        <main className="font-normal text-lg">
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
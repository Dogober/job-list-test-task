import { FC } from 'react';
import { useAppSelector } from '../hooks/redux';
import ApplyBtn from './ui/ApplyBtn';

const Description: FC = () => {

    const {detailsDisplayJob} = useAppSelector(state => state.currentJobSlice)

    return (
        <main className="font-normal text-lg">
            <ApplyBtn/>
            <header className="flex justify-between font-bold gap-5">
                <div className="max-w-[500px] text-2xl tracking-[-0.75]">
                    {detailsDisplayJob?.title}
                </div>
                <div className="text-xl tracking-[-0.63]">
                    € {detailsDisplayJob?.salary}
                    <p className="font-normal text-lg tracking-[-0.56] text">
                        Brutto, per year
                    </p>
                </div>
            </header>
            <p className="font-normal text-lg text-[#38415D]/[.36] my-1">
                Posted {detailsDisplayJob?.updatedAt}
            </p>
            <div>
                {!detailsDisplayJob?.convertedDescription?.responsopilities ||
                    detailsDisplayJob?.convertedDescription?.benefits?.length === 1
                    ?<p>
                        {detailsDisplayJob?.convertedDescription.title}
                        {detailsDisplayJob?.convertedDescription?.responsopilities}
                        {detailsDisplayJob?.convertedDescription?.benefits}
                    </p>
                    :<p>{detailsDisplayJob?.convertedDescription.title}</p>
                }
            </div>
            <div className={
                    !detailsDisplayJob?.convertedDescription?.responsopilities
                        ?'hidden'
                        :'block'
                }
            >
                <p className="mt-8 mb-3 font-bold text-xl">Responsopilities</p>
                <p>{detailsDisplayJob?.convertedDescription.responsopilities}</p>
            </div>
            <div className={
                    detailsDisplayJob?.convertedDescription?.benefits?.length === 1
                        ?'hidden'
                        :'block'
                }
            >
            <p className="mt-8 mb-3 font-bold text-xl">Compensation & Benefits:</p>
                <ul>
                    {detailsDisplayJob?.convertedDescription?.benefits!.map((benefit, i) =>
                        <li
                            className=" list-square list-outside last:list-none"
                            key={i}
                        >
                            {benefit}
                        </li>
                    )}
                </ul>
            </div>
            <ApplyBtn/>
        </main>
    );
};

export default Description;
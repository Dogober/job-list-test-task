import { FC } from 'react';
import { useAppSelector } from '../hooks/redux';
import ApplyBtn from './ui/ApplyBtn';

const Description: FC = () => {

    const {detailsDisplayJob} = useAppSelector(state => state.currentJobSlice)

    return (
        <main className="font-normal text-lg">
            <div className="max-[640px]:hidden">
                <ApplyBtn/>
            </div>
            <header className="grid max-[640px]:grid-cols-2 grid-cols-2 max-[640px]:grid-rows-1 grid-rows-2 font-bold gap-x-14 max-[640px]">
                <div className="text-2xl tracking-[-0.75] row-start-1 row-end-4 max-[640px]:col-start-1 max-[640px]:col-end-3">
                    {detailsDisplayJob?.title}
                </div>
                <div className="text-xl tracking-[-0.63] justify-self-end max-[640px]:col-start-2 max-[640px]:row-end-6">
                    € {detailsDisplayJob?.salary}
                </div>
                <div className="font-normal text-lg tracking-[-0.56] text max-[640px]:justify-self-end max-[640px]:self-end">
                    Brutto, per year
                </div>
                <div className="self-center font-normal text-lg text-[#38415D]/[.36] my-1 max-[640px]:font-light max-[640px]:text-[13px] row-start-4 row-end-5 max-[640px]:col-start-1 max-[640px]:row-end-6">
                    Posted {detailsDisplayJob?.updatedAt}
                </div>
            </header>
            <div className="max-[640px]:mt-4">
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
                            className=" list-square list-outside last:list-none max-[640px]:ml-5"
                            key={i}
                        >
                            {benefit}
                        </li>
                    )}
                </ul>
            </div>
            <div className="max-[640px]:flex max-[640px]:justify-center">
                <ApplyBtn/>
            </div>
        </main>
    );
};

export default Description;
import { FC } from 'react';

interface AdditionalBtnProps {
    bgColor: string
    borderColor: string
    textColor?: string
    infoAr?: string[]
}

const AdditionalBtn: FC<AdditionalBtnProps> = ({bgColor, borderColor, textColor, infoAr}) => {
    return (
        <>
        {infoAr?.map(el =>
            <button
                key={el}
                className={`${textColor} ${borderColor} ${bgColor} py-4 rounded-lg border max-w-[222px] w-full mr-2 font-bold text-base mt-2 cursor-default`}
            >
                {el}
            </button>
        )}
        </>
    );
};

export default AdditionalBtn;
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
                className={`py-4 bg-${bgColor} rounded-lg border-${borderColor} border max-w-[222px] w-full mr-2 font-bold text-base text-${textColor} mt-2 cursor-default`}
            >
                {el}
            </button>
        )}
        </>
    );
};

export default AdditionalBtn;
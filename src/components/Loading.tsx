import { FC } from 'react';

const Loading: FC = () => {
    return (
        <div className="mt-[5%] text-[#3A4562] font-bold text-3xl flex gap-2 items-center">
            <div className="w-7 h-7 rounded-full border-2 border-[#3A4562] border-dashed animate-spin"></div>
            <p>Loading</p>
        </div>
    );
};

export default Loading;
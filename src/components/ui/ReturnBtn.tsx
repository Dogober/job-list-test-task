import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowIcon from '../svg/ArrowIcon';

const ReturnBtn: FC = () => {
    
    const route = useNavigate()

    return (
        <button
            onClick={() => route(-1)}
            className=" mt-24 font-semibold text-xs px-6 py-4 bg-[#384564]/20 rounded-lg -ml-24">
            <div className="flex gap-5">
                <ArrowIcon/> RETURN TO JOB BOARD
            </div>
        </button>
    );
};

export default ReturnBtn;
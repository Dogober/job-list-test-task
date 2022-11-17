import { FC } from 'react';
import { PaginationArrow } from '../../models/PaginationArrow';

const PaginationArrowLeft: FC<PaginationArrow> = ({currentPage}) => {

    return (
        <svg
            className={`mr-auto hover:${currentPage === 1 ?'scale-100 cursor-default' :'scale-125 cursor-pointer'} transition-all`}
            width="12" 
            height="18" 
            viewBox="0 0 12 18" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd" 
                clipRule="evenodd"
                d="M10.4974 1.51303C9.67041 0.686035 8.32959 0.686036 7.5026 1.51303L1.51299 7.50264C0.685994 8.32963 0.685994 9.67045 1.51299 10.4974L7.5026 16.4871C8.32959 17.314 9.67041 17.314 10.4974 16.4871C11.3244 15.6601 11.3244 14.3192 10.4974 13.4922L6.00519 9.00004L10.4974 4.50783C11.3244 3.68084 11.3244 2.34002 10.4974 1.51303Z" 
                fill="#aab0c7"
            />
        </svg>
    );
};

export default PaginationArrowLeft;
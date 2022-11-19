import { FC } from 'react';

interface PaginationArrowProps {
    currentPage: number
    lastPage?: number | string
}

const PaginationArrowRight: FC<PaginationArrowProps> = ({currentPage, lastPage}) => {

    return (
        <svg
            onMouseOver={(e) => {
                e.currentTarget.style.transitionDuration='200ms'
                    if (currentPage === lastPage) {
                        return e.currentTarget.style.scale='1'
                    }
                        e.currentTarget.style.scale='1.25'
                }
            }
            onMouseOut={(e) => e.currentTarget.style.scale='1'}            
            width="12" 
            height="18" 
            viewBox="0 0 12 18" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M1.5026 1.51303C2.32959 0.686035 3.67041 0.686036 4.4974 1.51303L10.487 7.50264C11.314 8.32963 11.314 9.67045 10.487 10.4974L4.4974 16.4871C3.67041 17.314 2.32959 17.314 1.5026 16.4871C0.675605 15.6601 0.675607 14.3192 1.5026 13.4922L5.99481 9.00004L1.5026 4.50783C0.675604 3.68084 0.675605 2.34002 1.5026 1.51303Z" 
                fill="#aab0c7"
            />
        </svg>
    );
};

export default PaginationArrowRight;
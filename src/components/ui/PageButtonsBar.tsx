import { FC } from 'react';
import { DOTS } from '../../hooks/usePagination';

interface PageButtonsBarProps {
    paginationRange: (string | number) [] | undefined
    currentPage: number
    onPageChange: (number: number) => void
}

const PageButtonsBar: FC<PageButtonsBarProps> = ({paginationRange, currentPage, onPageChange}) => {

    const classNames = {
        hover: "text-[#5876C5] text-xl font-bold w-[31px] border-b-2 border-[#5876C5] h-full pt-0.5",
        unHover: "text-[#67708b] text-xl font-bold w-[31px]"
    }

    return (
        <>
            {paginationRange?.map((pageNumber, i) => {
                if (pageNumber === DOTS) {
                    return (
                        <button 
                            key={i} 
                            className={`${classNames.unHover} cursor-default`}
                        >
                            &#8230;
                        </button>
                    )
                }

                return (
                    <button 
                        className={pageNumber === currentPage ?classNames.hover :classNames.unHover} 
                        key={i}
                        onClick={() => {if(typeof pageNumber === 'number') onPageChange(pageNumber)}} 
                    >
                        {pageNumber}
                    </button>
                )
            })}
        </>
    )
}

export default PageButtonsBar;
import { FC } from 'react';
import { usePagination } from '../../hooks/usePagination';
import { IPagination } from '../../models/IPagination';
import PaginationArrowLeft from '../svg/PaginationArrowLeft';
import PaginationArrowRight from '../svg/PaginationArrowRight';
import PageButtonsBar from './PageButtonsBar';

const Pagination: FC<IPagination> = ({onPageChange, totalCount, siblingCount = 1, currentPage, pageSize}) => {

    const paginationRange = usePagination({currentPage, totalCount, siblingCount, pageSize, onPageChange})

    if (currentPage === 0 || paginationRange?.length! < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1)
    }

    const onPrevious = () => {
        onPageChange(currentPage - 1)
    }
    const lastPage = paginationRange![paginationRange?.length! - 1];

    return (
        <div className="w-[515px] h-[52px] bg-white rounded-[10.4px] my-12 px-[23px] flex items-center justify-center gap-2">
            <button
                disabled={currentPage === 1}
                onClick={onPrevious}
            >
                <PaginationArrowLeft currentPage={currentPage}/>
            </button>
            <p className="border-l w-px h-8 my-2 ml-5"></p>
            <div className="w-full flex items-center justify-center mx-6 h-full select-none">
                <PageButtonsBar 
                    paginationRange={paginationRange} 
                    currentPage={currentPage} 
                    onPageChange={onPageChange}
                />
            </div>
            <p className="border-r w-px h-8 my-2 mr-5"></p>
            <button
                disabled={currentPage === lastPage}
                onClick={onNext}
            >
                <PaginationArrowRight currentPage={currentPage} lastPage={lastPage}/>
            </button>
        </div>
    )
}

export default Pagination;
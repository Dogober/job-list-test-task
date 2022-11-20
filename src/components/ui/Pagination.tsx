import { FC } from 'react';
import { usePagination } from '../../hooks/usePagination';
import { IPagination } from '../../models/IPagination';
import PaginationArrowLeft from '../svg/PaginationArrowLeft';
import PaginationArrowRight from '../svg/PaginationArrowRight';
import PageButtonsBar from './PageButtonsBar';

const Pagination: FC<IPagination> = ({onPageChange, totalCount, siblingCount = 1, currentPage, pageSize}) => {
    
    const paginationRange = usePagination({currentPage, totalCount, siblingCount, pageSize})

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
        <div className="max-[640px]:max-w-[400px] max-w-[515px] w-full max-[640px]:h-[40px] h-[52px] shadow max-[640px]:bg-[#F9FAFD] bg-white rounded-[10.4px] max-[640px]:my-5 my-12 px-[23px] flex items-center justify-center gap-2">
            <button
                disabled={currentPage === 1}
                onClick={onPrevious}
            >
            <div className="max-[640px]:hidden">
                <PaginationArrowLeft currentPage={currentPage}/>
            </div>
            </button>
            <p className="border-l w-px h-8 my-2 ml-5 max-[640px]:h-6"></p>
            <div className="w-full flex items-center justify-center mx-6 h-full select-none">
                <PageButtonsBar 
                    paginationRange={paginationRange} 
                    currentPage={currentPage} 
                    onPageChange={onPageChange}
                />
            </div>
            <p className="border-r w-px h-8 my-2 mr-5 max-[640px]:h-6"></p>
            <button
                disabled={currentPage === lastPage}
                onClick={onNext}
            >
            <div className="max-[640px]:hidden">
                <PaginationArrowRight currentPage={currentPage} lastPage={lastPage}/>
            </div>
            </button>
        </div>
    )
}

export default Pagination;
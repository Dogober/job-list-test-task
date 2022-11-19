import { FC, useEffect } from 'react';
import Error from '../components/Error';
import JobItem from '../components/JobItem';
import Loading from '../components/Loading';
import Pagination from '../components/ui/Pagination';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { changePage, fetchJobList } from '../store/reducers/ActionCreators';

const JobList: FC = () => {
    const dispatch = useAppDispatch()
    const {
      error, 
      isLoading, 
      jobs, 
      displayJobs, 
      currentPage, 
      limit } = useAppSelector(state => state.jobListSlice)
  
    useEffect(() => {
      if (jobs.length === 0) dispatch(fetchJobList())
      window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
        {error
          ?<Error/>
          :<div className="flex flex-col items-center gap-2 px-[5%] py-5 bg-[#F5F5F5] min-h-screen">
            {isLoading
              ?<Loading/>
              :<>
                {displayJobs.map(job =>
                <JobItem key={job.id} item={job}/>)
                }
                <Pagination
                  totalCount={jobs.length!} 
                  pageSize={limit} 
                  siblingCount={1} 
                  currentPage={currentPage}
                  onPageChange={(page: number) => dispatch(changePage(page))}
                />
              </>
            }
          </div>
        }
        </>
    );
};

export default JobList;
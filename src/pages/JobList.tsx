import { FC, useEffect } from 'react';
import JobItem from '../components/JobItem';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchJobList } from '../store/reducers/ActionCreators';

const JobList: FC = () => {
    const dispatch = useAppDispatch()
    const {error, isLoading, jobs} = useAppSelector(state => state.jobListSlice)
  
    useEffect(() => {
      if (jobs.length === 0) {
        dispatch(fetchJobList())
      }
    }, [])
    return (
        <div className="flex flex-col items-center gap-2 px-[5%] py-5 bg-[#F5F5F5] min-h-screen">
          {jobs.map(job =>
            <JobItem key={job.id} item={job}/>
          )}
        </div>
    );
};

export default JobList;
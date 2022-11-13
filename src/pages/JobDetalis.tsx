import { FC, useEffect } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';

const JobDetalis: FC = () => {
    const params = useParams()
    const {jobs} = useAppSelector(state => state.jobListSlice)
    const route = useNavigate()
    const currentJob = jobs.filter(job => job.id === params.id)[0]
    
    useEffect(() => {
        if (jobs.length === 0) {
            route('/home')
        }
      }, [])
  
    return (
        jobs.length !== 0 
        ?<div className="flex">
            <div className="">
                <p>{currentJob.id}</p>
                <p>{currentJob.description}</p>
            </div>
            <div></div>
        </div>
        :<></>
    );
};

export default JobDetalis;
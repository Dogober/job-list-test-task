import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CurrentJobDetalis from '../components/CurrentJobDetalis';
import { useAppSelector } from '../hooks/redux';

const JobDetalis: FC = () => {
    const {jobs} = useAppSelector(state => state.jobListSlice)
    const route = useNavigate()
    
    useEffect(() => {
        if (jobs.length === 0) {
            route('/home')
        }
      }, [])
  
    return (
        jobs.length !== 0 
        ?<div className="gap-2 px-[15%] py-14">
            <CurrentJobDetalis/>
        </div>
        :<></>
    );
};

export default JobDetalis;
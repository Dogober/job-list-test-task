import { useEffect } from "react";
import JobItem from "./components/JobItem";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchJobList } from "./store/reducers/ActionCreators";

function App() {
  
  const dispatch = useAppDispatch()
  const {error, isLoading, jobs} = useAppSelector(state => state.jobListSlice)

  useEffect(() => {
    dispatch(fetchJobList())
  }, [])

  return (
        <div className="flex flex-col items-center gap-2 px-5 py-5">
          {jobs.map(job =>
            <JobItem key={job.id} item={job}/>
          )}
        </div>
  );
}

export default App;

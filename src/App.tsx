import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchJobList } from "./store/reducers/ActionCreators";

function App() {
  
  const dispatch = useAppDispatch()
  const {error, isLoading, jobs} = useAppSelector(state => state.jobListSlice)

  useEffect(() => {
    dispatch(fetchJobList())
  }, [])

  return (
    <div className="">
      {jobs.map(job =>
        <div 
          key={job.id}
        >
          <p className="font-semibold text-xl">
            name: {job.name}
          </p>
          <address>
            {job.address}
          </address>
        </div> 
      )}
    </div>
  );
}

export default App;

import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CurrentJobDetalis from '../components/CurrentJobDetalis';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchCurrentJob } from '../store/reducers/ActionCreators';

const JobDetalis: FC = () => {

    const {errorDetails: error, isLoading } = useAppSelector(state => state.currentJobSlice)
    const params = useParams()
    const dispatch = useAppDispatch()

    window.scrollTo(0, 0)

    useEffect(() => {
        dispatch(fetchCurrentJob(params.id))
    }, [])
    
    return (
        <>
            {error
            ?<Error errorPlace="JobDetalis"/>
            :<div className="py-14 flex justify-center pb-28 px-[5%]">
              {isLoading
                ?<Loading/>
                :<CurrentJobDetalis/>
              }
            </div>
          }
        </>
    );
};

export default JobDetalis;
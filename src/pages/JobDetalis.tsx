import { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CurrentJobDetalis from '../components/CurrentJobDetalis';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchCurrentJob } from '../store/reducers/ActionCreators';

const JobDetalis: FC = () => {

    const {errorDetails, isLoading} = useAppSelector(state => state.currentJobSlice)
    const params = useParams()
    const dispatch = useAppDispatch()

    window.scrollTo(0, 0)

    useEffect(() => {
        dispatch(fetchCurrentJob(params.id))
    }, [])
    
    return (
        <>
            {errorDetails
            ?<Error errorPlace="JobDetalis"/>
            :<div className="py-14 flex justify-center pb-28 px-[5%] max-[640px]:px-4">
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
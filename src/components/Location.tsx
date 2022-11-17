import { FC } from 'react';
import { useAppSelector } from '../hooks/redux';
import { createMapUrl } from '../utilities/createMapUrl';
import GpsIcon from './svg/GpsIcon';

const Location: FC = () => {

    const {currentJob} = useAppSelector(state => state.jobListSlice)
    
    return (
        <div>
            <div
                style={{backgroundImage: 'url(/Circle.svg)'}}
                className=" bg-no-repeat bg-[#2A3047] text-[#E7EAF0] max-w-[422px] w-full max-h-[218px] h-full ml-auto rounded-t-lg pt-8 px-16 flex flex-col gap-2">
                <div className="font-bold text-xl mb-2">
                    <p>
                        Department name.
                    </p>
                    <p>
                        {currentJob?.name}.
                    </p>
                </div>
                <div className="flex gap-2">
                    <GpsIcon/>
                    <p className="text-lg font-normal text-[#E8EBF3]">{currentJob?.address}</p>
                </div>
                <p>
                    {currentJob?.phone}, {currentJob?.email}
                </p>
                
            </div>
            <img
                className="rounded-b-lg"
                alt="map" 
                src={currentJob ?createMapUrl(currentJob) :''}
            />
        </div>
    );
};

export default Location;
import { FC } from 'react';
import { useAppSelector } from '../hooks/redux';
import { createMapUrl } from '../utilities/createMapUrl';
import GpsIcon from './svg/GpsIcon';

const Location: FC = () => {

    const {detailsDisplayJob} = useAppSelector(state => state.currentJobSlice)
    
    return (
        <div className="flex items-center flex-col h-[436px]">
            <div
                style={{backgroundImage: `url(${require('../assets/Circle.png')}`}}
                className=" bg-no-repeat bg-[#2A3047] text-[#E7EAF0] max-[640px]:max-w-[372px] max-w-[402px] w-full max-h-[218px] h-full rounded-t-lg pt-8 px-16 flex flex-col gap-2">
                <div className="font-bold max-[640px]:text-base text-xl mb-2">
                    <p>
                        Department name.
                    </p>
                    <p className="font-bold max-[640px]:text-base text-xl">
                        {detailsDisplayJob?.name}.
                    </p>
                </div>
                <div className="flex gap-2">
                    <GpsIcon/>
                    <p className="max-[640px]:text-base text-lg text-[#E8EBF3]">{detailsDisplayJob?.address}</p>
                </div>
                <p className="max-[640px]:text-base text-lg max-[640px]:leading-3 leading-4">
                    {detailsDisplayJob?.phone},
                </p>
                <p className="max-[640px]:text-base text-lg max-[640px]:leading-3 leading-4">
                    {detailsDisplayJob?.email}
                </p>
            </div>
            <img
                className="rounded-b-lg max-[640px]:hidden max-w-[402px] w-full"
                alt="map" 
                src={detailsDisplayJob ?createMapUrl(detailsDisplayJob, "402") :''}
            />
            <img
                className="rounded-b-lg min-[640px]:hidden max-w-[372px] w-full"
                alt="map" 
                src={detailsDisplayJob ?createMapUrl(detailsDisplayJob, "372") :''}
            />
        </div>
    );
};

export default Location;
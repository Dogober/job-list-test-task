import moment from 'moment';
import { FC } from 'react';
import { Job } from '../models/Job';

const gpsIcon = require('../assets/GpsIcon')

interface JobItemProps {
    item: Job
}

const JobItem: FC<JobItemProps> = ({item}) => {

    const updatedAt = moment(item.updatedAt, "YYYY-MM-DDThh:mm:ss").fromNow()

    return (
        <div className="max-w-[1400px] w-full h-[164px] px-4 py-6 bg-white rounded-lg font-sans box text-[#515f88] shadow flex flex-row items-center gap-8 justify-between">
            <div className="flex flex-col gap-2 max-w-[714px] w-full">
                <header className="text-xl font-bold tracking-[-0.625px]">
                    {item.title.slice(0, item.title.length-1)}
                </header>
                <p className="text-base font-normal tracking-[0.23619px]">
                    Department name • {item.name}
                </p>
                <div>
                    <img src={gpsIcon}/>
                    <p className="text-base font-normal">{item.address}</p>
                </div>
            </div>
            <div>
                Stars: {item.benefits.length}
            </div>
            <div className="flex flex-col h-full">
                <div className=" flex-auto ml-auto">
                    <svg 
                        width="18" 
                        height="23" 
                        viewBox="0 0 18 23" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            fill-rule="evenodd" 
                            clip-rule="evenodd" 
                            d="M1 4.00016C1 2.5274 2.19391 1.3335 3.66667 1.3335H14.3333C15.8061 1.3335 17 2.5274 17 4.00016V19.9936C17 21.1595 15.609 21.7639 14.7567 20.9682L9.90994 16.4428C9.39761 15.9645 8.60239 15.9645 8.09007 16.4428L3.24327 20.9682C2.39104 21.7639 1 21.1595 1 19.9936V4.00016Z" 
                            stroke="#70778B" 
                            stroke-width="2"
                        />
                    </svg>
                </div>
                <div>Posted {updatedAt}</div>
            </div>
        </div>
    );
};

export default JobItem;
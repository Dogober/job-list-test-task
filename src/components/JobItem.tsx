import moment from 'moment';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Job } from '../models/Job';

interface JobItemProps {
    item: Job
}

const JobItem: FC<JobItemProps> = ({item}) => {

    const updatedAt = moment(item.updatedAt, "YYYY-MM-DDThh:mm:ss").fromNow()
    const route = useNavigate()
    const stars = () => {
        const ar = []
        const random = Math.floor(Math.random() * 5)-1
        while (ar.length <= random) {
            ar.push('')
        }
        return ar.map(() => 
            <svg
                key={Math.random() * 1}
                width="19" 
                height="18" 
                viewBox="0 0 19 18" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M6.69871 4.58966C7.42979 2.93116 8.82013 0.000488281 9.51634 0.000488281C10.5274 -0.000511719 12.7421 5.68649 12.7421 5.68649C12.7421 5.68649 14.7923 5.86549 16.4493 6.04849C17.3289 6.14549 18.8997 6.29349 18.998 6.77849C19.019 6.88349 18.8927 7.31249 18.663 7.61149C17.69 8.88149 15.1654 11.6025 15.1654 11.6025C15.1654 11.6025 15.3038 12.9025 15.4272 14.3245C15.5064 15.2445 15.7201 17.1085 15.6428 17.4415C15.5586 17.8085 15.4071 17.9085 15.2497 17.9665C14.8384 18.1165 13.8835 17.5335 12.7682 16.9995C11.2486 16.2705 9.54141 15.4915 9.54141 15.4915C9.54141 15.4915 8.41501 16.0805 7.07998 16.6555C5.65367 17.2695 4.20931 18.2815 3.60649 17.9255C3.23035 17.7025 3.50919 15.9645 3.65363 14.4175C3.78904 12.9585 3.90639 11.6255 3.90639 11.6255C3.90639 11.6255 3.06987 10.6435 2.09592 9.59349C1.04375 8.45849 -0.239128 7.23349 0.0387113 6.78349C0.248344 6.44349 1.20523 6.26149 2.81209 6.06249C4.51924 5.85049 6.22439 5.70049 6.22439 5.70049C6.22439 5.70049 6.41022 5.24412 6.69871 4.58966Z" 
                    fill="#38415D"
                />
            </svg>
        )
    }

    return (
        <div
            onClick={() => route(`/home/${item.id}`)}
            className="max-w-[1400px] w-full min-h-[164px] px-4 py-6 bg-white rounded-lg font-sans box shadow flex flex-row justify-between gap-8 hover:bg-[#f7f7f8] transition-all duration-200 cursor-pointer">
            <div
                style={{
                    backgroundImage: `url(${item.pictures[0] + `?random=${Math.floor(Math.random() * 1000)}`})`,
                    minWidth: '90px',
                    maxHeight: '90px',
                    borderRadius: '45px',
                    backgroundSize: 'cover',
                }}
            >
            </div>
            <div className="flex flex-col gap-2 max-w-[712px] w-full mr-auto">
                <header className="text-xl font-bold tracking-[-0.625px] text-[#606c92]">
                    {item.title.slice(0, item.title.length-1)}
                </header>
                <p className="text-base font-normal tracking-[0.23619px] text-[#8d96b4]">
                    Department name • {item.name}
                </p>
                <div className="flex gap-1">
                    <img
                        className="w-5 h-5 block"
                        src="https://www.freeiconspng.com/thumbs/location-icon-png/gray-location-icon-png-6.png" 
                        alt='gpsIcon'/>
                    <p className="text-base font-normal text-[#8d96b4]">{item.address}</p>
                </div>
            </div>
            <div className="mt-auto mb-auto flex">
                {stars()}
            </div>
            <div className="flex flex-col max-w-[138px] w-full">
                <div className=" flex-auto ml-auto">
                    <svg 
                        width="18" 
                        height="23" 
                        viewBox="0 0 18 23" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M1 4.00016C1 2.5274 2.19391 1.3335 3.66667 1.3335H14.3333C15.8061 1.3335 17 2.5274 17 4.00016V19.9936C17 21.1595 15.609 21.7639 14.7567 20.9682L9.90994 16.4428C9.39761 15.9645 8.60239 15.9645 8.09007 16.4428L3.24327 20.9682C2.39104 21.7639 1 21.1595 1 19.9936V4.00016Z" 
                            stroke="#70778B" 
                            strokeWidth="2"
                        />
                    </svg>
                </div>
                <div className="text-[#8d96b4] font-normal">
                    Posted {updatedAt}
                </div>
            </div>
        </div>
    );
};

export default JobItem;
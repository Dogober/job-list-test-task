import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Job } from '../models/Job';
import { randomizer } from '../utilities/randomizer';
import NoteIcon from './NoteIcon';
import StarIcon from './StarIcon';

interface JobItemProps {
    item: Job
}

const JobItem: FC<JobItemProps> = ({item}) => {

    const route = useNavigate()

    return (
        <div
            onClick={() => route(`/home/${item.id}`)}
            className="max-w-[1400px] w-full min-h-[164px] px-4 py-6 bg-white rounded-lg font-sans box shadow flex gap-8 hover:bg-[#f7f7f8] transition-all duration-200 cursor-pointer"
        >
            <div
                style={{
                    backgroundImage: `url(${item.pictures[randomizer(item.pictures.length)]})`,
                    minWidth: '90px',
                    maxHeight: '90px',
                    borderRadius: '45px',
                    backgroundSize: 'cover',
                }}
            >
            </div>
            <div className="flex flex-col gap-2 max-w-[712px] w-full mr-auto">
                <header className="text-xl font-bold tracking-[-0.625px] text-[#67708b]">
                    {item.title}
                </header>
                <p className="text-base font-normal tracking-[0.23619px] text-[#aab0c7]">
                    Department name • {item.name}
                </p>
                <div className="flex gap-1">
                    <img
                        className="w-5 h-5 block"
                        src="https://www.freeiconspng.com/thumbs/location-icon-png/gray-location-icon-png-6.png" 
                        alt='gpsIcon'
                    />
                    <p className="text-base font-normal text-[#aab0c7]">{item.address}</p>
                </div>
            </div>
            <div className="mt-auto mb-auto flex">
                {item?.rating?.map((_, i) => <StarIcon key={i}/>)}
            </div>
            <div className="flex flex-col max-w-[138px] w-full">
                <div className=" flex-auto ml-auto">
                    <NoteIcon/>
                </div>
                <div className="text-[#aab0c7] font-normal">
                    Posted {item.updatedAt}
                </div>
            </div>
        </div>
    );
};

export default JobItem;
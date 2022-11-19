import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { DisplayJob } from '../models/DisplayJob';
import Rating from './Rating';
import GpsIcon from './svg/GpsIcon';
import NoteIcon from './svg/NoteIcon';

interface JobItemProps {
    item: DisplayJob
}

const JobItem: FC<JobItemProps> = ({item}) => {

    const route = useNavigate()
    
    return (
        <div
            onClick={() => route(`/home/${item.id}`)}
            className="max-[640px]:max-w-[400px] max-w-[1400px] w-full px-4 py-6 max-[640px]:bg-[#EFF0F5] bg-white rounded-lg font-sans shadow max-[640px]:flex-col flex gap-8 hover:bg-[#f7f7f8] duration-200 cursor-pointer text-[#aab0c7] relative"
        >
            <div className="flex w-full gap-7">
                <img
                    src={item.avatar}
                    alt="avatar"
                    className="max-[640px]:w-[66px] w-[90px] max-[640px]:h-[66px] h-[90px] rounded-full max-[640px]:mt-7">
                </img>
                <div className="flex max-[640px]:flex-col w-full max-[640px]:gap-4 gap-8 max-[640px]:mt-6">
                    <div className="flex flex-col gap-2 max-w-[712px] w-full mr-auto">
                        <header className="max-[640px]:text-lg text-xl max-[640px]:font-normal font-bold tracking-[-0.625px] text-[#67708b]">
                            {item.title}
                        </header>
                        <p>
                            Department name • {item.name}
                        </p>
                        <div className="flex gap-2">
                            <GpsIcon/>
                            <p>{item.address}</p>
                        </div>
                    </div>
                    <div className="flex max-[640px]:absolute max-[640px]:top-6 min-[640px]:hidden">
                        <Rating width="13" height="13" fill="#81889c" starCount={item.rating}/>
                    </div>
                    <div className="mt-auto mb-auto flex max-[640px]:hidden">
                        <Rating width="19" height="19" fill="#38415D" starCount={item.rating}/>
                    </div>
                    <div className="flex flex-col max-w-[138px] w-full max-[640px]:absolute max-[640px]:top-5 max-[640px]:right-0">
                        <div className=" flex-auto ml-auto max-[640px]:hidden">
                            <NoteIcon/>
                        </div>
                        <div className="max-[640px]:font-light max-[640px]:text-sm">
                            Posted {item.updatedAt}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobItem;
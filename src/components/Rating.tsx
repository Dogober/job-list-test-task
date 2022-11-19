import { FC } from 'react';
import StarIcon from './svg/StarIcon';

interface RatingProps {
    width: string
    height: string
    fill: string
    starCount: number
}

const Rating: FC<RatingProps> = ({width, height, fill, starCount}) => {
    return (
        <>
            {Array(starCount).fill(null).map((_, i) => 
                <StarIcon key={i} width={width} height={height} fill={fill}/>)}
        </>
    );
};

export default Rating;
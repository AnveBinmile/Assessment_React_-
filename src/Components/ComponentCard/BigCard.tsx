import React from 'react';
import { TrendingCard } from '../utils/types/type';

const BigCard :React.FC<TrendingCard> = ({key,title,year,type,img,width}) => {
    return (
        <div className='sm:min-w-[500px] min-w-[300px] flex flex-col justify-start sm:h-[200px]'>
            <div className="img w-[100%]">
              <img className='w-[500px]'  src={img} alt="" />
            </div>
        </div>
    )
}

export default BigCard;

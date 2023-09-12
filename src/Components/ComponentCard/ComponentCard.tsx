/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable max-len */
import React, { MouseEventHandler, useState,useContext } from 'react';
import { TrendingCard,TrendingCardProps } from './utils/types/type';
import { FavSelect,FavUnselect } from '../../assets';
import AppContext from '../../common/Context/AppContext';
import { trendingCards } from '../utils/constants/DummyData';
import './ComponentCardStyle.css';

type CardProps = TrendingCardProps & TrendingCard;

const ComponentCard: React.FC<CardProps> = ({
  isBig,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setlength = () =>{},
  topic='',
  id,
  description,
  img,
  title,
  year,
  type,
  favourite,
  setTopic=()=>{},
}) => {
  const data = useContext(AppContext);

  const [fav, setfav] = useState(favourite);

  console.log(topic);

  const favIcon = fav ? FavSelect : FavUnselect;


  const handleFav = () => {
    setfav(!fav);
    const { favArray } = data;
    const obj = {
      id: id,
      title: title,
      description: description,
      img: img,
      year: year,
      type: type,
      setlength: setlength,
    };

    if (fav === false) {
      favArray.push(obj);
      if (setlength) setlength(favArray.length);
      const index = trendingCards.findIndex((item) => item.id === obj.id);
      trendingCards[index].favourite = true;
    } else {
      favArray.splice(favArray.indexOf(obj), 1);
      const index = trendingCards.findIndex((item) => item.id === obj.id);
      trendingCards[index].favourite = false;
      if (setlength) setlength(favArray.length);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const newObj: TrendingCard = {
      setlength: setlength,
      id: id,
      img: img,
      title: title,
      year: year,
      type: type,
      description: description,
    };

    setTopic?.(newObj);
  };

  return (
    <div
      onClick={handleClick}
      className={` ${
        isBig ? 'bigCard' : 'smallCard'
      } relative cursor-pointer flex flex-col justify-start h-[470px] overflow-hidden`}
    >
      <div className="img relative w-[100%]">
        <img
          className="absolute rounded-2xl  right-[20px] top-[20px]"
          onClick={handleFav}
          src={favIcon}
          alt=""
        />
        <img
          className="w-[300px] max-h-[350px] min-w-[100%]"
          src={img}
          alt=""
        />
      </div>
      <div className={`rounded-b-[30px] ${isBig?'cardInfoLg':'cardInfoSm'} relative pl-[20px] gap-[5px] text-black flex bg-gray-400 flex-col justify-center h-[100px] border items-start opacity-70`}>
        <h3>{title}</h3>

        <h4>
          {year} | {type}
        </h4>
      </div>
    </div>
  );
};

export default ComponentCard;

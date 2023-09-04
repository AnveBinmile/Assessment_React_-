import React, { MouseEventHandler, useEffect, useState } from "react";
import { TrendingCard } from "../utils/types/type";
import { FavSelect, FavUnselect } from "../ComponentImages";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { trendingCards } from "../utils/constants/DummyData";
import { TrendingCardProps } from "../utils/types/type";

type CardProps = TrendingCardProps & TrendingCard;

const ComponentCard: React.FC<CardProps> = ({
  setlength,
  topic,
  key,
  description,
  img,
  title,
  year,
  type,
  favourite,
  setTopic,
}) => {
  const data = useContext(AppContext);

  const [fav, setfav] = useState(favourite);

  let favIcon = fav ? FavSelect : FavUnselect;

  const handleFav = () => {
    setfav(!fav);
    const { favArray } = data;
    const obj = {
      key: key,
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

      const index = trendingCards.findIndex((item) => item.title === obj.title);
      trendingCards[index].favourite = true;
    } else {
      favArray.splice(favArray.indexOf(obj), 1);
      const index = trendingCards.findIndex((item) => item.title === obj.title);
      trendingCards[index].favourite = false;
      if (setlength) setlength(favArray.length);
    }
  };

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const newObj: TrendingCard = {
      setlength: setlength,
      key: key,
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
      key={key}
      onClick={handleClick}
      className="w-[255px] relative cursor-pointer min-w-[300px] flex flex-col justify-start h-[470px] overflow-hidden"
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
      <div className="rounded-b-[30px] bottom-[100px] relative pl-[20px] gap-[5px] text-black flex bg-gray-400 flex-col justify-center h-[100px] border items-start opacity-70">
        <h3>{title}</h3>

        <h4>
          {year} | {type}
        </h4>
      </div>
    </div>
  );
};

export default ComponentCard;

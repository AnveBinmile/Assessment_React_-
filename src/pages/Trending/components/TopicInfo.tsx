import React from "react";
import { TrendingCard } from "../../../Components/utils/types/type";
import ComponentButton from "../../../Components/ComponentButton/ComponentButton";
import { FavUnselect } from "../../../Components/ComponentImages";

interface TrendingCardProps {
  topic: TrendingCard;
  setTopic?: React.Dispatch<React.SetStateAction<TrendingCard>>
}


const TopicInfo:React.FC<TrendingCardProps> = ({topic}) => {
  return (
    <div className="flex flex-col justify-center max-h-[350px] sm:min-w-[50%]  md:gap-[20px] mt-[30px] sm:m-0 m-auto  w-[80%] lg:max-w-[40%] gap-[20px]">
      <h1 className="text-white font-poppins text-2xl font-semibold leading-10">
        <span>{topic.title}</span>
      </h1>
      <p className="text-white font-poppins text-base font-medium leading-6">{topic.year} &nbsp; &nbsp; &nbsp; {topic.type}</p>
      <p className="text-white font-poppins text-base font-normal leading-2">
        {topic.description}
      </p>
      <div className="actions w-[250px] mt-[10px] justify-between flex">
        <ComponentButton/>
        <img className='w-[70px] rounded-3xl' src={FavUnselect} alt="" />    

      </div>
    </div>
  );
};

export default TopicInfo;

import React from "react";
import ComponentCard from "../../../Components/ComponentCard/ComponentCard";
import { trendingCards } from "../../../Components/utils/constants/DummyData";
import { TrendingCard } from "../../../Components/utils/types/type";
import { TrendingCardProps } from "../../../Components/utils/types/type";


const TrendingScroll: React.FC<TrendingCardProps> = ({ topic, setTopic }) => {
  return (
    <div className="overflow-x-scroll overflow-y-hidden custom-scrollbar h-[370px] min-h-[30%] flex gap-[10px] sm:gap-[30px]">
      {trendingCards.map((item) => {
        return (
          <ComponentCard
            setlength={() => {}}
            setTopic={setTopic}
            topic={topic}
            key={item.key}
            title={item.title}
            year={item.year}
            type={item.type}
            img={item.img}
            description={item.description}
            favourite={item.favourite}
            width={255}
          />
        );
      })}
    </div>
  );
};

export default TrendingScroll;

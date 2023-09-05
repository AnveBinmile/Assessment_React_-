import React from "react";
import ComponentCard from "../../../Components/ComponentCard/ComponentCard";
import { trendingCards } from "../../../Components/utils/constants/DummyData";
import { TrendingCardProps } from "../../../Components/utils/types/type";

const TrendingScroll: React.FC<TrendingCardProps> = ({ topic={...trendingCards[0]
}, setTopic=()=>{} }) => {
  console.log("passing cards ", trendingCards);
  return (
    <div className="overflow-x-scroll  overflow-y-hidden custom-scrollbar h-[370px] min-h-[30%] flex gap-[10px] sm:gap-[30px]">
      {trendingCards.map((item) => {
        return (
          <ComponentCard
            setTopic={setTopic}
            topic={topic}
            isBig={false}
            id={item.id}
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

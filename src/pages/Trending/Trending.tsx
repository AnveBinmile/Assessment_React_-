import { useState } from "react";
import { TrendingCard } from "../../Components/utils/types/type";
import { trendingCards } from "../../Components/utils/constants/DummyData";
import { TrendingTopic, TrendingScroll } from "./components";

const Trending = () => {
  const [topic, setTopic] = useState<TrendingCard>(trendingCards[0]);

  return (
    <div className="h-[100%] w-[100%] pt-[120px] flex flex-col  gap-[50px] px-[20px] sm:px-[50px]">
      <TrendingScroll isBig={false} setTopic={setTopic} topic={topic} />
      <TrendingTopic topic={topic} />
    </div>
  );
};

export default Trending;

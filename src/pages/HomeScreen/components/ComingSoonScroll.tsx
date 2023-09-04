import { comingSoonCards } from "../../../Components/utils/constants/DummyData";
import BigCard from "../../../Components/ComponentCard/BigCard";

const ComingSoonScroll = () => {
  return (
    <div className="comingsoonscroll overflow-x-scroll custom-scrollbar min-h-[40%] flex gap-[10px] sm:gap-[20px]">
      {comingSoonCards.map((item) => {
        return (
          <BigCard
            key={item.key}
            title={item.title}
            year={item.year}
            type={item.type}
            img={item.img}
            width={255}
          />
        );
      })}
    </div>
  );
};

export default ComingSoonScroll;

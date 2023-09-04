import { useEffect } from 'react';
import TopicImage from './TopicImage';
import TopicInfo from './TopicInfo';
import { TrendingCard } from '../../../Components/utils/types/type';

interface TrendingCardProps {
  topic: TrendingCard;
  setTopic?: React.Dispatch<React.SetStateAction<TrendingCard>>
}

const TrendingTopic:React.FC<TrendingCardProps> = ({topic,setTopic}) => {
  useEffect(()=>{

  },[])
  return (
    <div className=' flex justify-start flex-col  xl:gap-[50px] lg:flex-row w-[100%] md:gap-[150px] lg:gap-[250px]  sm:gap-[150px] gap-[50px]'>
        <TopicImage image={topic.img}/>
        <TopicInfo topic={topic}/>
    </div>
  )
}

export default TrendingTopic;
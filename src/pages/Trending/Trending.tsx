import  { useState } from 'react'
import TrendingScroll from '../HomeScreen/components/TrendingScroll'
import TrendingTopic from './components/TrendingTopic'
import { TrendingCard } from '../../Components/utils/types/type';
import { trendingCards } from '../../Components/utils/constants/DummyData';



const Trending = () => {

  const [topic, setTopic] = useState<TrendingCard>(
      trendingCards[0]
  )

 
  return (
    <div className='h-[100%] w-[100%] flex flex-col  gap-[50px] px-[20px] sm:px-[50px]'>
        <TrendingScroll setTopic={setTopic} topic={topic}/>
        <TrendingTopic topic={topic} setTopic={setTopic}/>
    </div>
  )
}

export default Trending;
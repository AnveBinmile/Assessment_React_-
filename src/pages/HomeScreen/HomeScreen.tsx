import ComingSoonScroll from "./components/ComingSoonScroll"
import Header from "./components/Header"
import TrendingScroll from "./components/TrendingScroll"

const HomeScreen = () => {
  return (
    <div className="homescreen h-[100%] flex flex-col gap-[30px] sm:gap-[50px] px-[2px] sm:px-[50px]">
        <Header/>
        <TrendingScroll/>
        <ComingSoonScroll/>
    </div>
  )
}

export default HomeScreen
import { TrendingScroll,ComingSoonScroll,Header } from "./components"

const HomeScreen = () => {
  return (
    <div className="homescreen h-[100%] flex flex-col gap-[30px] sm:gap-[50px] px-[2px] sm:px-[50px]">
        <Header/>
        <TrendingScroll isBig={false}/>
        <ComingSoonScroll/>
    </div>
  )
}

export default HomeScreen
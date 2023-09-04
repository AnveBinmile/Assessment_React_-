import { FavUnselect } from '../../../Components/ComponentImages';


const headerParaData = ["2022" ,"   |   ","Comedy Horror","   |   ","Search"];

const Header = () => {
  return (
    <div className='header rounded-2xl bg-headerImg min-h-[400px] flex flex-col w-[100%] justify-end p-[10px] sm:p-[30px]'>
        <div className="headerColumn w-[100%] px-[10px] p-[10px] sm:pb-[0] sm:w-[60%] ">
            <div className="content flex flex-col gap-[30px]">
                <h1 className='text-white font-poppins text-6xl sm:text-4xl font-semibold leading-tight'>Insider</h1>
                <p className='text-white  tracking-widest  gap-[20px] font-poppins text-base sm:text-xl font-normal leading-1'>{
                  headerParaData.map((item)=>{return item})
                }
                </p>
                <div className="action flex justify-between w-[250px] sm:w-[250px]">
                    <button className='flex rounded-xl justify-center items-center p-4 w-[150px] gap-3 bg-purple-600'>Watch Now</button>
                    <img className='w-[70px] rounded-3xl' src={FavUnselect} alt="" />    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
import Profile from './components/Profile'
import Menu from './components/Menu'

const UpperNavbar = () => {
  return (
    <div className='sm:h-[100px] h-[80px] w-[100%] items-center justify-between flex gap-[50px] sm:px-[50px]'>
        <Menu/>
        <Profile/>
    </div>
  )
}

export default UpperNavbar
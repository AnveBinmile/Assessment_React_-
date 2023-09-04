import React from 'react'

interface TopicImageProps{
  image: string
}

const TopicImage:React.FC<TopicImageProps> = ({image}) => {
  return (
    <div className='min-w-[30%] h-[300px] scale-200 object-cover'>
      <img className='sm:max-h-[400px] m-auto sm:m-[0] sm:min-w-[400px] ' src={image} alt="" />
    </div>
  )
}

export default TopicImage
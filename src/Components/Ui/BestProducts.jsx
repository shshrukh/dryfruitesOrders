import React from 'react'
import bg from '../../assets/bgImage.png'
import overLay from '../../assets/almad.png'
import Button from './Button'
const BestProducts = ({ heading, subheading, imageSrc}) => {

  return (
    <div
      className="relative w-130 h-63.75 rounded-md bg-center bg-cover pt-10 pl-9 "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className='w-62.5 '>
        <h1 className='text-2xl text-white '>{heading}</h1>
        <h2 className='text-xl text-white pt-4 pb-4'>{subheading}</h2>
        <Button children="Shop Now" />
      </div>
      <img src={imageSrc} alt="almand" className="absolute left-62.5 top-41 -translate-y-1/2 w-90" />

    </div>

  )
}

export default BestProducts

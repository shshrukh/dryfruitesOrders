import React from 'react'
import bg from '../../assets/bgimage.png'
import overLay from '../../assets/almad.png'
import Button from './Button'
const BestProducts = ({ heading, subheading, imageSrc, left, top, width }) => {

  return (
    <div
      className="relative  w-130 h-63.75  rounded-md bg-center bg-cover pt-10 pl-9 "
      style={{ backgroundImage: `url(${bg})` , flexShrink: 0 }}
    >
      <div className='w-62.5 '>
        <h1 className='text-2xl text-white '>{heading}</h1>
        <h2 className='text-xl text-white pt-4 pb-4'>{subheading}</h2>
        <Button children="Shop Now" />
      </div>
      <div className='overflow-hidden'>
        <img src={imageSrc} width={width} alt="almand" className={`${left} ${top}  absolute left-62.5 top-41 -translate-y-1/2 overflow-hidden`} />
      </div>

    </div>

  )
}

export default BestProducts

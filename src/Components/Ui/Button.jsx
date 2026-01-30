import React from 'react'

const Button = ({children}) => {
  return (
    <button  className='py-2 px-6 rounded-4xl outline-none bg-[#F59115] hover:bg-orange-600 text-[16px] text-white cursor-pointer'>
      {children}
    </button >
  )
}

export default Button

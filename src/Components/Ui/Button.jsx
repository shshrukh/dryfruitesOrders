import React from 'react'

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`
        py-2 px-6 rounded-2xl outline-none
        bg-[#F59115] hover:bg-orange-600
        text-white cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
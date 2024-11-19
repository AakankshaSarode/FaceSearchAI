import React from 'react'

const Button = (props) => {
  return (
    <div className='bg-cyan-500 text-white font-sans py-2 px-6 rounded md:ml-8 hover:bg-cyan-200 duration-500'>{props.children}</div>
  )
}

export default Button;
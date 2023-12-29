import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button 
        className='px-5 py-2 m-2 bg-zinc-800 rounded-xl hover:bg-gray-900 font-semibold text-white'>
          {name}
        </button>
        </div>
  )
}

export default Button
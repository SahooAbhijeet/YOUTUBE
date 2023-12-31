import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex text-black'>
        <img
        className='h-8 rounded-full'
        src='https://yt3.ggpht.com/7h280l0PpQx9NfiL7-OLkbKLzzTniEhRaFDRiOpx5DJy5tXw-PB_T1YwJrPxc6mb29ODQ2Mz-A=s88-c-k-c0x00ffffff-no-rj'
        alt='user'
        />
        <div>
            <span className='font-bold items-center px-2'>{name}</span>
            <span>{message}</span>
        </div>
    </div>
  )
}

export default ChatMessage
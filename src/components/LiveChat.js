import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../Redux/Slices/chat-slice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';


const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState(" ");
    const dispatch = useDispatch();

    const chatMessage = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            console.log("API POLLING");

            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: generateRandomMessage()
                })
            );
        }, 800);


        return(() => clearInterval(i));
    }, []);

  return (
    <>
    <div className='p-2 ml-2 border border-black h-[500px] w-[430px] bg-slate-100 rounded-xl overflow-y-scroll flex flex-col-reverse'>
        <div>
        {
            chatMessage.map((c, i) => (
                <ChatMessage key={i} name={c.name} message={c.message} />
            ))
        }
        </div>
    </div>
    <form 
    className='border border-black ml-2 p-2 w-full'
    onSubmit={(e) => {
        e.preventDefault();
        dispatch(
            addMessage({
                name: 'Abhi',
                message: liveMessage
            })
        )
        setLiveMessage('');
    }}
    >
        <input
        className='w-[350px] text-black'
        type='text'
        value={liveMessage}
        onChange={(e) => {
            setLiveMessage(e.target.value)
        }}
        />
        <button className='px-2 mx-2 bg-green-600'>Send</button>
    </form>
  </>
  )
}

export default LiveChat
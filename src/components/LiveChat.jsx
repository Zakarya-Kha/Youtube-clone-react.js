import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { setMessage } from './store/ChatSlice'
import { generateRandomMessage, generateRandomName } from './store/Helper'

const LiveChat = () => {
  const dispatch = useDispatch()

  useEffect(() => {
   const Timer = setInterval(() => {
    dispatch(setMessage({name:generateRandomName(), message:generateRandomMessage(16)}));
   }, 1000);

   return (() => {
    clearInterval(Timer);
   })
  }, [])
  
 

  const message = useSelector((store) => store.chat.message)

  return (
    <div>
      {
        message.map((item, idx) => (
          <ChatMessage
            key={idx}
            item={item}
          />
        ))
      }
      
    </div>
  )
}

export default LiveChat

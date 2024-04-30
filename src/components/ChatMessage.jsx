import React from 'react'
import Avatar from 'react-avatar'

const ChatMessage = ({item}) => {
  return (
    <div className='flex items-center mt-3'>
      <div>
      <Avatar src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" size={25} round={true} />
      </div>
      <div className='flex gap-3'>
        <h1 className='font-bold text-sm ml-1'>{item.name}</h1>
        <p className='text-sm'>{item.message}</p>
      </div>
    </div>
  )
}

export default ChatMessage

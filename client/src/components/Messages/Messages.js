import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import './Messages.css'
import Message from '../Message/Message'
const Messages = ({messages,name}) => {
    const list = messages.map((message,i)=> <div key={i}><Message message={message} name={name}/></div>)
    return(
        <ScrollToBottom className='messages'>
            {list}
        </ScrollToBottom>
    )
}

export default Messages

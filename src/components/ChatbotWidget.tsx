'use client';

import React, { useState } from 'react';
import { LuSend } from 'react-icons/lu';

const initialChatMessages = [
  {
    role: 'user',
    content: 'Hello, how are you?',
  },
  {
    role: 'bot',
    content: "I'm good, thank you! What about you?",
  },
  {
    role: 'user',
    content: "I'm good, thanks",
  },
  {
    role: 'bot',
    content: 'What are you looking for?',
  },
  {
    role: 'user',
    content: "I'm looking for a job",
  },
  {
    role: 'bot',
    content: 'What is your name?',
  },
  {
    role: 'user',
    content: 'My name is Aayush Rana',
  },
  {
    role: 'bot',
    content: 'What are you looking for?',
  },
  {
    role: 'user',
    content: "I'm looking for a job",
  },
  {
    role: 'bot',
    content: 'What is your name?',
  },
  {
    role: 'user',
    content: 'My name is Aayush Rana',
  },
];

const ChatbotWidget = () => {
  const [chatMessages, setChatMessages] = useState(initialChatMessages);
  const [inputMessage, setInputMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setInputMessage(value);
  };

  const handleSendMessage = () => {
    const newUserMessage = { role: 'user', content: inputMessage };
    setChatMessages([...chatMessages, newUserMessage]);
    setInputMessage('');
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  };

  const scrollToBottom = () => {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  return (
    <div className='flex flex-col justify-between border w-full max-h-[440px] rounded-[8px] overflow-hidden bg-white'>
      <div className='bg-gray-100 p-4'>
        <div className='flex items-center gap-2'>
          <div className='rounded-full bg-primary w-10 h-10 text-white flex items-center justify-center text-xs font-bold'>
            THH
          </div>
          <div className='flex flex-col'>
            <p className='text-sm font-bold'>Chat with HireHub AI</p>
            <p className='text-xs text-gray-500'>
              Ask anything about the job posts
            </p>
          </div>
        </div>
      </div>
      <div
        className='p-4 overflow-y-auto flex flex-col gap-4'
        id='chat-container'
      >
        {chatMessages.map((message, index) => {
          const { role, content } = message;
          return (
            <div
              key={index}
              className={`flex items-center gap-2 ${
                role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <p
                className={`inline-block text-end rounded-xl px-3 py-2 ${
                  role === 'user' ? 'bg-primary text-white' : 'bg-gray-100 '
                }`}
              >
                {content}
              </p>
            </div>
          );
        })}
      </div>
      <div className='flex items-center gap-2 p-4 border-t border-gray-200'>
        <div className='relative w-full flex items-center'>
          <input
            value={inputMessage}
            onChange={handleInputChange}
            type='text'
            placeholder='Type your questions here...'
            className='relative outline-1 active:outline-2 border-none w-full h-10 rounded-xl border-2 border-gray-200 px-3 py-2'
          />
          <button
            className='text-primary p-2 rounded-sm absolute right-2 text-sm cursor-pointer hover:bg-gray-100 font-bold'
            onClick={handleSendMessage}
          >
            <LuSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotWidget;

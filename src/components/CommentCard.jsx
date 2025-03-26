import React from 'react';
import { FiBookmark } from 'react-icons/fi';

const CommentCard = ({ title, description, imageUrl }) => {
    return (
      <div className="flex w-[550px] h-[200px] shadow-sm gap-2 rounded-lg">
        
        <img src={imageUrl} alt={title} className="w-[65%] rounded-[20px] " />
        <div className="flex flex-col justify-around">
            <div className='flex items-center justify-between'>
          <h3 className='font-bold text-[20px]'>{title}</h3>
            <button><FiBookmark className="ml-auto mr-4 text-[35px] rounded-[50%] border-1 p-2 text-[#636AE8FF] bg-[#ededf9]  cursor-pointer" />
                          </button>
          </div>
          <p className='text-[16px]'>{description}</p>
         
        </div>
        
      </div>
    )
}

export default CommentCard

import React from 'react';
import CommentCard from './CommentCard';
const EditorsSection = () => {
  const comments = [
    {
      title: 'Stuffed sticky rice ball',
      description: 'Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...',
      imageUrl: '/Chefify/image29.png',
    },
    {
      title: 'Strawberry Smoothie',
      description: 'Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...',
      imageUrl: '/Chefify/image30.png',
    },
    {
      title: 'Latte Art',
      description: 'Latte art is the skillful craft of creating captivating designs on the surface of a latte...',
      imageUrl: '/Chefify/image31.png',
    },
    {
      title: 'Butter fried noodles',
      description: 'Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...',
      imageUrl: '/Chefify/image32.png',
    },
  ];

  return (
    <div className='w-full h-auto bg-white flex flex-col gap-4'>
      <h1 className='flex justify-center text-[42px] pt-10 font-bold text-[#636AE8FF]'>
      Editor's pick</h1>
      <div className="flex flex-wrap justify-center gap-2">
        {comments.map((comment, index) => (
          <CommentCard
            key={index}
            title={comment.title}
            description={comment.description}
            imageUrl={comment.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default EditorsSection;

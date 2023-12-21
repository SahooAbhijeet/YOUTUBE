import React from 'react'


const commentsData = [
      {
          name: "@FFKING",
          text: "I truly love your channel. Keep doing the best work.",
          replies: []
      },
      {
        name: "@CrazyMantriOfficial",
        text: "I've never witnessed such awesome editing as this one. ",
        replies: []
    },
    {
      name: "@Abhi",
      text: "Love this video, I think I've watched it four times. ",
      replies: []
    },
    {
      name: "@Rahul",
      text: "No matter how many times I see it, It inspires me more and more.",
      replies: [
        {
          name: "@Sanjay",
          text: "No matter how many times I see it, It inspires me more and more.",
          replies: [
            {
              name: "@Dhvani",
              text: "Such creative videos you've on this channel. Just subscribed!",
              replies: []
            },
          ]
        },
      ]
    },
    {
      name: "@Vijay",
      text: "I've just realized that I've been watching your videos for about two years.",
      replies: [
        {
          name: "@Rahul",
          text: "No matter how many times I see it, It inspires me more and more.",
          replies: [
            {
              name: "@Rahul",
              text: "No matter how many times I see it, It inspires me more and more.",
              replies: [
                {
                  name: "@Hardy",
                  text: "I simply love your video style, truly refreshing and creative.",
                  replies: []
                },
              ]
            },
          ]
        },
      ]
    },
    {
      name: "@Badsaah",
      text: "So happy that your videos are now coming regularly, I was missing them. ",
      replies: [
        {
          name: "@Abhimanyu",
          text: "Hats off to you and your team for putting your best efforts into this video. ",
          replies: []
        },
        {
          name: "@Krishna",
          text: "The content quality is the main thing that makes us watch your videos again.",
          replies: []
        },
      ]
    },
    {
      name: "@Prince",
      text: "I was feeling lost in life, glad that this video came at the right time. ",
      replies: []
    },
    {
      name: "@navvs4586",
      text: "I truly love your channel. Keep doing the best work.",
      replies: []
    },
    {
      name: "@Abhisekh",
      text: "Thanks for your video, it encourages me to take the first step toward my dreams.",
      replies: []
    },
    {
      name: "@Avinash",
      text: "You really are very creative with your thumbnail. It catches attention.",
      replies: []
    },
]


const Comment = ({data}) => {
  const {name, text, replies } = data;
  return (
    <div className='flex shadow-md bg-gray-100 p-2 rounded-lg my-2'>
      <img
      className='w-12 h-12'
      src='https://pixsector.com/cache/50fcb576/av0cc3f7b41cb8510e35c.png'
      alt='user'
      />
      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}
/* 
* Now first list down single nested level comment in commentList component
*/
const CommentList = ({ comments }) => {
  
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className='pl-5 border border-l-black ml-5'>
      <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
}

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments: </h1>
      <CommentList comments={commentsData} />
    </div>
  )
}


export default CommentContainer
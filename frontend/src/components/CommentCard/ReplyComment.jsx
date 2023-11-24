import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import CommentCard from './CommentCard';
import  axios from 'axios';
import { useSelector } from 'react-redux';


const ReplyComment = (comment) => {
  const [reply , setReply] = useState('');
  const [replies, setReplies] = useState([]);
  const { user } = useSelector((state) => state.user);

  const handleCommentChange = (e)=>{
    setReply(e.target.value);
  };

  const handleSubmit = async () => {
   
    const postReply = {
        text:reply,
        user : user._id,
        userName : user.name,
        createdAt : new Date(),
        comment : comment.comment._id,
        likes : [],
      };

      axios.post('/comments/reply',postReply , {
        headers : {
          "Content-Type" : "application/json",
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e)=>console.log(e));

      

  };

  const response = async () => {
    const response =  await axios.get(`/comments/getReplies/${comment.comment._id}`);
    setReplies(response.data.replies)
    console.log(response);
    }

  useEffect(()=>{
    response();
  },[]);

  return (
    <div className='ml-10'>
    <div>
    {
    replies.map((replyComment ,index) => (
      <div key={index}><CommentCard comment={replyComment}/></div>
      
    ))
    }
    </div>


    <div className="flex items-center space-x-4 p-4">
      <FaUserCircle size={30}/>
      <div className="flex-1 rounded">
        <input
          type="text"
          placeholder="Reply to comment"
          value={reply}
          onChange={handleCommentChange}
          className="w-full p-2 rounded-full focus:outline-none focus:border-blue-500"
        />
      </div>
   
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Post
      </button>
    </div>

    </div>
  )
}

export default ReplyComment;

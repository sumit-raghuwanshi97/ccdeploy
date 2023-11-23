import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import CommentCard from './CommentCard';
import  axios from 'axios';


const ReplyComment = (comment) => {
  const [reply , setReply] = useState('');
  const [replies, setReplies] = useState([]);
  const token = document.cookie.split('; ')
    .find(cookie => cookie.startsWith('token'));

    const headers = {
      'authorization' : `${token}`,
    };

  const handleCommentChange = (e)=>{
    setReply(e.target.value);
  };

  const handleSubmit = async () => {
   
    const postReply = {
        text:reply,
        userName : localStorage.getItem('username'),
        createdAt : new Date(),
        post : comment.comment._id,
        likes : [],
      };

    console.log(postReply);
    // const postComment = postReply;
    // // const response = await axios.post('/posts/addComment',postComment,{headers});
      
    //   console.log(response);
    //   const mpost = {
    //     ...postReply,
    //     _id : response.data._id,
    //   };

    //   replies.push(mpost);
    //   setReply('');

  };


  return (
    <div>
    {/* <div>
    {
    replies.map((replyComment ,index) => (
    <CommentCard comment={replyComment}/>
    ))
    }
    </div> */}


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

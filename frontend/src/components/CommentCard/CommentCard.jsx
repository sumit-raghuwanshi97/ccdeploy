import React, { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FormatDate from './FormatDate';
import ReplyComment from './ReplyComment';
import axios from 'axios';
import UserList from '../Popups/UserList';
import { Avatar } from '@mui/material';

const CommentCard = ({comment}) => {
  const[like , setLike] = useState(false);
  const[count, setCount] = useState(0);
  const[commentLikes , setCommentLikes] = useState([]);
  const[showCommentLikes, setShowCommentLikes] = useState(false);
  const[replyComment , setReplyComment] = useState(false);

  const token = document.cookie.split('; ')
    .find(cookie => cookie.startsWith('token'));

    const headers = {
      'authorization' : `${token}`,
    };

  const handleLikeComment = () =>{
    setLike(!like);
    if(like){ setCount(count-1)} else{ setCount(count+1)}
    axios.get(`/comments/like&unlike/${comment._id}`,{headers});
  };

  const handleCommentReply = () =>{
    console.log("comment reply");
    setReplyComment(!replyComment);
  };

  const handleShowCommentLikes = () => {
    setShowCommentLikes(!showCommentLikes);
    axios.get(`/comments/getLikes/${comment._id}`,{headers})
    .then((response)=>{
     const CommentLikes = response.data.Likedby.likes;
     setCommentLikes(CommentLikes);
    })
    .catch((error)=> {
      console.log(error);
    });
  };

  useEffect(()=>{

     axios.get(`/comments/getLikes/${comment._id}`,{headers})
    .then((response)=>{
        setLike(response.data.userLike);
        setCount(response.data.Likedby.likes.length);
        console.log(response);
    })
    .catch((error)=> {
        console.log(error);
    });

  },[]);

  return (
    <div key={comment.id}>
    <div className="flex rounded">

    <Link onClick={()=>window.open(`http://localhost:3000/user/${comment.user}`)} className='mr-2 mt-2  text-blue-600'>
    <FaUserCircle src="https://media.licdn.com/dms/image/D5603AQGCnurPcOrv2Q/profile-displayphoto-shrink_400_400/0/1687752389377?e=1706140800&v=beta&t=J8ET4-_N6Zn7zz0U4VOUULWOvdpVcsunxoA9Hxin9Ok" size={30} />
    {/* <Avatar alt="profile" src ="https://media.licdn.com/dms/image/D5603AQGCnurPcOrv2Q/profile-displayphoto-shrink_400_400/0/1687752389377?e=1706140800&v=beta&t=J8ET4-_N6Zn7zz0U4VOUULWOvdpVcsunxoA9Hxin9Ok" /> */}
    </Link>

    <div className="bg-[#edf5fa] p-2 pt-1 mt-2 flex items-start align-right w-full">
      <div>
        <div>
        <Link onClick={()=>window.open(`http://localhost:3000/user/${comment.user}`)} className='font-bold text-black'>{comment.userName}</Link>
        <p className="text-xs text-gray-600 mb-2">{FormatDate(comment.createdAt)}</p>
        </div>
        <p className="text-black text-sm">{comment.text}</p>
      </div>
    </div>
    </div>
    <div className='flex my-1 mb-3 items-right mx-9'>
      {like ?
      <span onClick={handleLikeComment} className='font-bold text-xs text-blue-600 mr-1 hover:bg-gray-300 px-1 hover:rounded cursor-pointer'>Liked</span>
      :<span onClick={handleLikeComment} className='font-semibold text-xs mr-1 hover:bg-gray-300 px-1 hover:rounded cursor-pointer'>Like</span>
      }
      {count>0 &&
      <span onClick={handleShowCommentLikes} className='font-semibold text-xs mr-1 hover:bg-gray-300 px-1 hover:rounded cursor-pointer'>{count} |</span>
      }
      <span onClick={handleCommentReply} className='font-semibold text-xs mr-3 hover:bg-gray-300 px-1 hover:rounded cursor-pointer'>Reply</span>
    </div>

    {
    replyComment &&  <ReplyComment comment={comment}/> 
    }

    {
    showCommentLikes && 
    <UserList likers={commentLikes} onClose={()=>setShowCommentLikes(false)}/>
    }

  </div>
  );
  }

export default CommentCard;

import { useState , useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import {AiOutlineArrowLeft ,AiOutlineHeart , AiTwotoneHeart, AiFillCheckCircle  ,AiFillCloseCircle} from "react-icons/ai";
import {BsBookmark ,BsFillBookmarkFill} from "react-icons/bs";
import {GoDotFill} from "react-icons/go";
import {FaRegComment} from "react-icons/fa";
import {IoIosShareAlt} from "react-icons/io";
import {BiArrowBack} from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md"
import CommentCard from '../CommentCard/CommentCard';
import UserList from '../Popups/UserList';



function  PostView() {
  const { postId } = useParams();
  const [post,setPost] = useState({});
  const [like,setLike] = useState(false);
  const [bookmark,setBookmark] = useState(false);
  const [selected,setSelected] =useState(false);
  const [count,setCount] = useState(0);
  const [likers, setLikers] = useState([]);
  const [showLikers, setShowLikers] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [showCommentBox, setShowCommentBox] = useState(false);
  const token = document.cookie.split('; ')
    .find(cookie => cookie.startsWith('token'));

    const headers = {
      'authorization' : `${token}`,
    };

    const onCommentHit = () => {
      setShowCommentBox(true);
    }

    const handleCommentChange = (e) => {
      setComment(e.target.value);
    };
  
    const handleSubmit = async () => {

      const postComment = {
        text:comment,
        userName : localStorage.getItem('username'),
        createdAt : new Date(),
        post : postId,
        likes : [],
      };

      const response = await axios.post('/posts/addComment',postComment,{headers});
      
      console.log(response);
      const mpost = {
        ...postComment,
        _id : response.data._id,
      };

      comments.push(mpost);
      setComment('');
    };

  //on load
  useEffect(() => {
  
    axios.get(`/posts/getPosts/${postId}`,{headers})
      .then((response) => {
        const post = response.data.post;
        const isBookmarked = response.data.isBookmarked;
        //set post 
        setPost(post);
        setBookmark(isBookmarked);
        //set status icon
        if(post.status==="Selected") setSelected(true);

      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
       

      axios.get(`/posts/getLikers/${postId}`,{headers})
        .then((response) => {
          const likers = response.data.likers;
          console.log("like -" + response.data.currLike);
          setLike(response.data.currLike);
          setLikers(likers);
          setCount(likers.length);
        })
        .catch((error) => console.log(error));

      
      axios.get(`/posts/getComment/${postId}`)
        .then((response) => {
          const comments = response.data.comments;
          const orderofcomments = comments.slice().reverse();
          setComments(orderofcomments);
        })
        .catch( (error) => console.log(error));
      
  }, []);

  
  const  onLikeHit = async () =>{
    
    if(like){
    await axios.get(`/posts/likePost/${postId}`,{headers});
    setCount(count-1);
    setLike(false);
    }
    else{
    console.log(postId);
    axios.get(`/posts/likePost/${postId}`,{headers});
    setCount(count+1);
    setLike(true);

    } 
  };

  //on bookmark 

  const onBookmarkHit = () => {
    //bookmark post 
    // if(bookmark) setBookmark(false);
    // else
    // setBookmark(true);

    axios.get(`/posts/bookmarkPost/${postId}`,{headers})
    .then((response)=>{
      console.log(response);
      setBookmark(!(response.data.isBookmarked));
    })
    .catch((e)=>(console.log(e)));
  };


return (
    
    <div  class="container mx-auto p-10 bg-blue-100 shadow-lg rounded-lg mt-8">
   <div>
    <Link to="/posts" className="flex">
      <div className='flex'>
      <span><BiArrowBack  size={23} class="mb-2 mr-2"/></span>
      <span>Back</span>
      </div>
    </Link>
    </div>
  
   
    <h1 class="text-2xl font-semibold mb-1">{post.caption}</h1>
  
   
    <div class="flex items-center text-gray-600 space-x-2">
      <span class="flex items-center space-x-1">
        <span class="material-icons text-green-600"><GoDotFill/></span>
        <span>{post.company}</span>
      </span>
      <span class="flex items-center space-x-1">
        <span class="material-icons text-green-600"><GoDotFill/></span>
        <span>{post.type}</span>
      </span>
      <span class="flex items-center space-x-1">
        {
        selected ?
        (<span class="material-icons text-green-600"><AiFillCheckCircle/></span>)
       :(<span class="material-icons text-[#FF0000]"><AiFillCloseCircle/></span>)
        } 
        <span>{post.status}</span>
      </span>
  
      {bookmark ? (
        <span
          onClick={onBookmarkHit}
          class="material-icons text-gray-500 cursor-pointer"
        >
         <BsFillBookmarkFill/>
        </span>
      ) : (
        <span
          onClick={onBookmarkHit}
          class="material-icons text-blue-500 cursor-pointer"
        >
          <BsBookmark/>
        </span>
      )}
    </div>
  
    <div  class="prose mt-4">
      <div dangerouslySetInnerHTML={{ __html: post.content }} />

    </div>
    <div className='flex my-5'>
    {like ? 
      (
        <span
          onClick={onLikeHit}
          class="material-icons text-[#FF0000] cursor-pointer mx-1.5"
        >
         <AiTwotoneHeart size={26}/>
        </span>
      ) : (
        <span
          onClick={onLikeHit}
          class="material-icons text-black-500 cursor-pointer mx-1.5"
        >
          <AiOutlineHeart size={26} />
        </span>
      )}
      <span 
      onClick={onCommentHit}
      className='mx-1.5 cursor-pointer'><FaRegComment size={23} /></span>
      <span className='mx-1.4 cursor-pointer'><IoIosShareAlt size={24} /></span>
      </div>
    
      
      <div className="text-black relative group">
      <span className="ml-2" onClick={() => setShowLikers(true)}>
        {count} Likes
      </span>
      </div>

    {/* view All comments */}
    <div>
    <h2 onClick={()=>{setShowComments(!showComments);setShowCommentBox(true);}}className="font-semibold text-black-sm relative group ml-2 mb-2"
    >View all {comments.length} comments</h2>
    {
    showComments && (<div>  {comments.map((comment) => (<CommentCard comment={comment}/>))}</div>)
    }
    </div>
    
    {/* Show comment box */}
    {showCommentBox && 
    (<div className="flex items-center space-x-4 p-4">
      <FaUserCircle size={30}/>
      <div className="flex-1 rounded">
        <input
          type="text"
          placeholder="Add a comment"
          value={comment}
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
    )}
    
    {showLikers &&  <UserList onClose={()=>setShowLikers(false)} likers={likers}/>}
    </div>
 );
}

export default PostView;

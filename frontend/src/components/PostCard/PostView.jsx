import { useState , useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import {AiOutlineArrowLeft ,AiOutlineHeart , AiTwotoneHeart, AiFillCheckCircle  ,AiFillCloseCircle} from "react-icons/ai";
import {BsBookmark ,BsFillBookmarkFill} from "react-icons/bs";
import {GoDotFill} from "react-icons/go";
import {FaRegComment} from "react-icons/fa";
import {IoIosShareAlt} from "react-icons/io";
import {BiArrowBack} from "react-icons/bi";


function  PostView() {
  const { postId } = useParams();
  const [post,setPost] = useState({});
  const [like,setLike] = useState(false);
  const [bookmark,setBookmark] = useState(false);
  const [selected,setSelected] =useState(false);
  const [count,setCount] = useState(0);
  const [likers, setLikers] = useState([]);
  const [showLikers, setShowLikers] = useState(false);

  console.log(postId);

  console.log(postId);
  useEffect(() => {
    axios.get(`/posts/getPosts/${postId}`)
      .then((response) => {
        const post = response.data.post;
        //set post 
        setPost(post);

        //set status icon
        if(post.status==="Selected") setSelected(true);
        setCount(5);
        
        
      })
      .catch((error) => console.log(error));
       
      const token = document.cookie.split('; ')
    .find(cookie => cookie.startsWith('token'));

    console.log(token);

    const headers = {
      'Authorization' : `${token}`,
    };

      axios.get(`/posts/getLikers/${postId}`,{headers})
        .then((response) => {
          const likers = response.data.likers;
          console.log("like -" + response.data.currLike);
          setLike(response.data.currLike);
          setLikers(likers);
        })
        .catch((error) => console.log(error));

     
      
  }, []);

  
  const  onLikeHit = () =>{
    
    const token = document.cookie.split('; ')
    .find(cookie => cookie.startsWith('token'));

    console.log(token);

    const headers = {
      'Authorization' : `${token}`,
    };

    if(like){
    setLike(false);
    }
    else{
    console.log(postId);
    axios.get(`/posts/likePost/${postId}`,{headers});
    setLike(true);
    } 
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
          onClick={() => setBookmark(false)}
          class="material-icons text-gray-500 cursor-pointer"
        >
         <BsFillBookmarkFill/>
        </span>
      ) : (
        <span
          onClick={() => setBookmark(true)}
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
      <span className='mx-1.5 cursor-pointer'><FaRegComment size={23} /></span>
      <span className='mx-1.4 cursor-pointer'><IoIosShareAlt size={24} /></span>
      </div>
    
      
      <div className="text-black relative group">
      <span className="ml-2" onClick={() => setShowLikers(!showLikers)}>
        {count + like} Likes
      </span>
      {showLikers && (
        <div className="absolute top-0 left-0 bg-white border border-blue-500 p-2 rounded-lg" onClick={() => setShowLikers(!showLikers)}>
          <p className="font-bold">Liked by:</p>
          <div className="flex flex-col">
            {likers.map((liker, index) => (
              <span key={index} className="p-1 ml-2">
                {liker.username}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>

    </div>
 );
}

export default PostView;

import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import "../App.css"
import { PostListContext } from "../Store/Post-List-Store";
export default function Post({post}) {
  const {deletePost} = useContext(PostListContext)
  const [likes,setLikes] = useState(post.reation || 0)
  // var tags = `#${post.tags.join(" #")}`;
  return (
    <div className="card" >
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      
      <div className="card-body">
      <span onClick={()=>deletePost(post.id)}  class="position-relative  start-100 translate-middle badge rounded-pill " >
      <MdDelete style={{fontSize:"20px",color:"black"}}/>

    <span class="visually-hidden">unread messages</span>
  </span>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">
         {post.content}
        </p>
        {/* <a href="#" className="btn btn-primary">
          Go somewhere
        </a> */}
        <span onClick={()=>{setLikes(likes+1)}}>💖</span>&nbsp; {likes}
        <hr />
        {post.tags}
      </div>
    </div>
  );
}

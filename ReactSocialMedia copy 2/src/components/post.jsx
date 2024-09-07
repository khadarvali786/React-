import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import "../App.css";
import { PostListContext } from "../Store/Post-List-Store";
export default function Post({ post }) {
  console.log(post);

  const { deletePost } = useContext(PostListContext);
  const [likes, setLikes] = useState(post.reactions.likes);
  var tags = `#${post.tags.join(" #")}`;
  return (
    // <div class="card">
    //   {/* <img src="..." class="card-img-top" alt="..." /> */}

    //   <div class="card-body">
    //     <span
    //       onClick={() => deletePost(post.id)}
    //       class="position-relative  start-100 translate-middle badge rounded-pill "
    //     >
    //       <MdDelete style={{ fontSize: "20px", color: "black" }} />

    //       <span class="visually-hidden">unread messages</span>
    //     </span>
    //     <h5 class="card-title">{post.title}</h5>
    //     <p class="card-text">{post.body}</p>
    //     {/* <a href="#" class="btn btn-primary">
    //       Go somewhere
    //     </a> */}
    //     <span
    //       onClick={() => {
    //         setLikes(likes + 1);
    //       }}
    //     >
    //       💖
    //     </span>
    //     &nbsp; {}
    //     <hr />
    //     {tags}
    //   </div>
    // </div>


    <div class="card">
    {/* <img src="..." class="card-img-top" alt="..." /> */}
    <div class="card-body">
      <span
        onClick={() => deletePost(post.id)}
        class="position-relative  start-100 translate-middle badge rounded-pill "
      >
        <MdDelete style={{ fontSize: "20px", color: "black" }} />

        <span class="visually-hidden">unread messages</span>
      </span>
      <h5 class="card-title">{post.title}</h5>
      <p class="card-text">{post.body}</p>
      {/* <a href="#" class="btn btn-primary">
        Go somewhere
      </a> */}
      <span
        onClick={() => {
          setLikes(likes + 1);
        }}
      >
        💖
      </span>
      &nbsp; {likes}
      <hr />
      {tags}
    </div>
  </div>
  );
}

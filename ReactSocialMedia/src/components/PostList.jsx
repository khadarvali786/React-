import { useContext } from "react";
import Post from "./post";
import { PostListContext } from "../Store/Post-List-Store";
import "../App.css";

export default function PostList() {
  const { postList } = useContext(PostListContext);
  return (
    <div className="post-container">
      {postList.length > 0 ? (
        postList.map((post, index) => <Post key={index} post={post} />)
      ) : (
        <h1>No Post Available</h1>
      )}
    </div>
  );
}

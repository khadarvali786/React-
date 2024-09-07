import { createContext, useCallback, useEffect, useReducer, useState } from "react";
import { v4 as uuid4 } from "uuid";
import { useNavigate } from "react-router-dom";


export const PostListContext = createContext([
  {
    postList: [],
    addPost: () => {},
    deletePost: () => {},
    loader:false
  },
]);

const postReducer = (currPost, action) => {
  var newPost = currPost;
  if (action.type == "DELETE_POST") {
    newPost = currPost.filter((post) => post.id != action.payload);
  } else if (action.type === "ADD_POST") {
    var newObj = {
      id: uuid4(),
      title: action.payload.title,
      body: action.payload.description,
      user: action.payload.name,
      tags: action.payload.tags.split(","),
      reactions: {
        likes: 0,
        dislikes: 0
      }
    };
    newPost = [newObj, ...currPost];

  } else if (action.type == "FETCH_POSTS") {
    newPost = action.payload;
  }
  return newPost;
};


const PostListContextProvider = ({ children }) => {
  
  const [postList, dispatchPostData] = useReducer(postReducer, []);
  const [loader, setLoader] = useState(false);

  const deletePost = useCallback((postId) => {
    dispatchPostData({ type: "DELETE_POST", payload: postId });
  },[dispatchPostData]);
  
  const addPost = (newPost) => {
   
    dispatchPostData({ type: "ADD_POST", payload: newPost });
   
  };
  const fetchData = (postData) => {
    console.log(postData.posts);
    dispatchPostData({
      type: "FETCH_POSTS",
      payload: postData.posts,
    });
  };


  return (
    <PostListContext.Provider
      value={{ postList, deletePost, addPost,loader}}
    >
      {children}
    </PostListContext.Provider>
  );
};
export default PostListContextProvider;

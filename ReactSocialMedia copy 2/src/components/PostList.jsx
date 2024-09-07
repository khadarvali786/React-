import { useContext, useEffect, useState } from "react";
import Post from "./post";
import { PostListContext } from "../Store/Post-List-Store";
import "../App.css";
import Spinner from "./Spinner";
import { useLoaderData } from "react-router-dom";

export default function PostList() {
  const postList = useLoaderData();
 
  //
  // const handleFetchData = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       fetchData(data);
  //     });
  // };

  return (
    <div className="post-container">
      {postList.length > 0
        ? postList.map((post, index) => <Post key={index} post={post} />)
        : (
            <center>
              <h1>No Post Available</h1>
              {/* <button
            type="button"
            className="btn btn-outline-info"
            onClick={handleFetchData}
          >
            <strong>Fetch The Data From Server</strong>
          </button> */}
            </center>
          )}
    </div>
  );
}

export const postLoader = () => {
 return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

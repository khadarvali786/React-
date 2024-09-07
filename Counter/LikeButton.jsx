import { useState } from "react";

export default function LikeButton() {
  let [isLike, setIslike] = useState(false);
  let [likeCount, setLikeCount] = useState(0);
  const isToggle = () => {
    if (!isLike) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
    setIslike(!isLike);
  };
  let style = {
    color: "red",
  };
  return (
    <>
      <h1 onClick={isToggle}>
        {isLike ? (
          <i className="fa-solid fa-heart" style={style}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
        :{likeCount}
      </h1>
    </>
  );
}

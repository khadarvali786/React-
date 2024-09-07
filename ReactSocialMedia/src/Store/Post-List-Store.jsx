import { createContext, useReducer } from "react";
import {v4 as uuid4} from "uuid"

export const PostListContext = createContext([
  {
    postList: [],
    addPost: () => {},
    deletePost: () => {},
  },
]);

const postReducer = (currPost, action) => {
    var newPost = currPost;
    if(action.type == "DELETE_POST"){
        newPost = currPost.filter(post => post.id !=action.payload);
    }else if(action.type ==="ADD_POST"){
        var newObj = {
            id: uuid4(),
            title: action.payload.title,
            content: action.payload.description,
            user : action.payload.name,
            tags : action.payload.tags
        }
        newPost=[
            ...currPost,
            newObj
        ]
 
    }
  return newPost;
};

const default_postList = [
  {
    id: 1,
    title: "The Future of AI: Exploring New Horizons",
    content: "Exploring new horizons in tech innovation",
    reation: 5,
    user: "techguru",
    tags: ["technology", "innovation", "future"],
  },
  {
    id: 2,
    title: "Sizzling Summer: Ultimate BBQ Guide",
    content: "Delicious recipes for a summer barbecue",
    reation: 8,
    user: "chefmaster",
    tags: ["cooking", "summer", "outdoors"],
  },
  {
    id: 3,
    title: "Zen in the City: Urban Mindfulness Techniques",
    content: "The art of mindfulness in daily life",
    reation: 12,
    user: "mindfulme",
    tags: ["mindfulness", "wellbeing", "lifestyle"],
  },
  {
    id: 4,
    title: "Wanderlust 2024: Top 10 Travel Destinations",
    content: "Top 10 must-visit destinations for 2024",
    reation: 15,
    user: "globetrotter",
    tags: ["travel", "adventure", "bucketlist"],
  },
  {
    id: 5,
    title: "Machine Learning 101: From Novice to Pro",
    content: "Mastering the basics of machine learning",
    reation: 7,
    user: "datawizard",
    tags: ["AI", "programming", "datascience"],
  },
  {
    id: 6,
    title: "Green Living: Eco-Friendly Home Hacks",
    content: "Eco-friendly tips for a sustainable home",
    reation: 9,
    user: "ecochamp",
    tags: ["sustainability", "environment", "lifestyle"],
  },
  {
    id: 7,
    title: "Game On: The E-Sports Revolution",
    content: "The rise of e-sports in mainstream culture",
    reation: 11,
    user: "gamerX",
    tags: ["gaming", "esports", "entertainment"],
  },
  {
    id: 8,
    title: "Urban Jungle: Mastering City Gardening",
    content: "Beginner's guide to urban gardening",
    reation: 6,
    user: "greenthumb",
    tags: ["gardening", "urban", "hobbies"],
  },
  {
    id: 9,
    title: "Crypto Decoded: Understanding Digital Currency",
    content: "Understanding cryptocurrency: A primer",
    reation: 14,
    user: "cryptoking",
    tags: ["finance", "crypto", "technology"],
  },
  {
    id: 10,
    title: "Sleep Your Way to Better Mental Health",
    content: "The importance of sleep for mental health",
    reation: 10,
    user: "sleepyhead",
    tags: ["health", "sleep", "mentalhealth"],
  },
];
const PostListContextProvider = ({ children }) => {
  const [postList, dispatchPostData] = useReducer(
    postReducer,
    default_postList
  );
  const deletePost = (postId) => {
    dispatchPostData({ type: "DELETE_POST", payload: postId });
  };
  const addPost = (newPost) => {
    
    dispatchPostData({ type: "ADD_POST", payload: newPost });
  }
  
  return (
    <PostListContext.Provider value={{ postList, deletePost,addPost }}>
      {children}
    </PostListContext.Provider>
  );
};
export default PostListContextProvider;

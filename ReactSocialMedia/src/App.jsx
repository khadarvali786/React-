import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListContextProvider from "./Store/Post-List-Store";
import Forms from "./components/Forms";
import { FORM } from "./components/formConstant";
import {validationSchema} from "./components/validation";

function App() {
  
  const [selectTab, setSelectTab] = useState("Home");


  return (
    <>
    <PostListContextProvider>
      <div className="app-container">
        <SideBar selectTab={selectTab} setSelectTab={setSelectTab}/>
        <div className="content">
          <Header />
          {/* {selectTab === "Home" ? <PostList /> : <Forms forms={FORM}  schema={validationSchema} />} */}
          {selectTab === "Home" ? <PostList /> : <Forms forms={FORM}  schema={validationSchema} validateOn={"change"}/>}
        </div>
      </div>
      </PostListContextProvider>
    </>
  );
}

export default App;

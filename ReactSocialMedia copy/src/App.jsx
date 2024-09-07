import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import PostList from "./components/PostList";
import PostListContextProvider from "./Store/Post-List-Store";
import Forms from "./components/Forms";
import { FORM } from "./components/formConstant";
import { validationSchema } from "./components/validation";
import { Outlet } from "react-router-dom";

function App() {
  const [selectTab, setSelectTab] = useState("Home");

  return (
    <>

      <PostListContextProvider>
        <div class="app-container">
          <SideBar  />
          <div class="content">
            <Header />
            {/* {selectTab === "Home" ? <PostList /> : <Forms forms={FORM}  schema={validationSchema} />} */}
            <Outlet/>
          </div>
        </div>
      </PostListContextProvider>
    </>
  );
}

export default App;

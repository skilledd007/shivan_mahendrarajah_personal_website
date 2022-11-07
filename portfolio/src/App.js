
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";
function App() {
 return (
  <BrowserRouter>
  <NavBar />
    <Routes>
      <Route path="/" element = {<Home />} exact> </Route>
      <Route path="/about" element = {<About />}> </Route>
      <Route path="/post/:slug" element = {<SinglePost />}> </Route>
      <Route path="/post" element = {<Post />}> </Route>
      <Route path="/project" element = {<Project />}> </Route>
    </Routes>
  </BrowserRouter>
 )
}

export default App;

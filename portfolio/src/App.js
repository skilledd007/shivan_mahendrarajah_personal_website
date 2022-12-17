
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";
import Travelogue from "./components/Travelogue";
import Publications from "./components/Publications";
import SingleTravelogue from "./components/SingleTravelogue";
function App() {
 return (
  <BrowserRouter>
  <NavBar />
    <Routes>
      <Route path="/" element = {<Home />} exact> </Route>
      <Route path="/about" element = {<About />}> </Route>
      <Route path="/post/:slug" element = {<SinglePost />}> </Route>
      <Route path="/travelogue/:slug" element={<SingleTravelogue/>}></Route>
      <Route path="/post" element = {<Post />}> </Route>
      <Route path="/publications" element = {<Publications />}> </Route>
      <Route path="/travelogue" element={<Travelogue />}></Route>
    </Routes>
  </BrowserRouter>
 )
}

export default App;

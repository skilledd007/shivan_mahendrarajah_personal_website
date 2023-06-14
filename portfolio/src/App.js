
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import Travelogue from "./components/Travelogue";
import Publications from "./components/Publications";
import SingleTravelogue from "./components/SingleTravelogue";
import SinglePublication from "./components/SinglePublication";
import Pictures from "./components/Pictures";
import Podcasts from "./components/Podcasts";

function App() {
 return (
  <BrowserRouter>
  <NavBar />
    <Routes>
      <Route path="/" element = {<Home />} exact> </Route>
      <Route path="/about" element = {<About />}> </Route>
      <Route path="/publications/:slug" element={<SinglePublication/>}></Route>
      <Route path="/travelogue/:slug" element={<SingleTravelogue/>}></Route>
      <Route path="/post" element = {<Post />}> </Route>
      <Route path="/publications" element = {<Publications />}> </Route>
      <Route path="/travelogue" element={<Travelogue />}></Route>
      <Route path="/pictures" element={<Pictures />}> </Route>
      <Route path ="/podcasts" element={<Podcasts /> }> </Route>
    </Routes>
  </BrowserRouter>
 )
}

export default App;

import "./App.css";
import { BrowserRouter as  Route} from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./section/Home";
import About from "./section/About";
import PodCasts from "./section/PodCasts";
import Comments from "./section/Comments";
import Blog from "./section/Blog";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import Rating from "./section/Rating";
import Support from "./section/Support";



function App() {
  return <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/podCasts" element={<PodCasts />} />
    <Route path="/comments"element={<Comments />} />
    <Route path="/blog" element={<Blog />} /> 
    <Route path="/footer" element={<Footer />} />
    <Route path="/hero" element={<Hero />} />
    <Route path="/rating" element={<Rating />} />
    <Route path="/support" element={<Support />} />
  </Routes>
  
  
  
  </>;
}

export default App;

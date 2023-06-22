import About from "../components/sections/About";
import Blog from "../components/sections/Blog";
import Navbar from "../components/Navbar";
import Podcasts from "../components/sections/Podcasts";
import Rating from "../components/sections/Rating";
import Comments from "../components/sections/Comments";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Podcasts />
      <Blog />
      <Rating />
      <Comments />
      <Footer />
    </>
  );
}

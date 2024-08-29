import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import About from "./About";
import Errorpage from "./Errorpage";
import Contact from "./contact";
import Blog from "./Blog";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contactus" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<Errorpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

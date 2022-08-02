import "./App.css";
import Posts from "./Posts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

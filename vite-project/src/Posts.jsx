import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/posts");
    const data = await response.json();
    setPosts(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <Link to={`/posts/${post._id}`}>
          <div key={post._id}>{post.title}</div>
        </Link>
      ))}
    </div>
  );
}

export default Posts;

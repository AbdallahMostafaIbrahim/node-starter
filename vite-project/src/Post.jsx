import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Post() {
  const [post, setPost] = useState();
  const params = useParams();

  console.log(post);

  const fetchData = async () => {
    const response = await fetch(`http://localhost:8000/posts/${params.id}`);
    const data = await response.json();
    setPost(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {post === undefined && "Loading"}
      <Link to="/posts/">Back</Link>
      <h1>{post?.title}</h1>
      <h2>{post?.author}</h2>
      <span>{post?.description}</span>
      <p>{post?.body}</p>
    </div>
  );
}

export default Post;

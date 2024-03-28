import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";

const Posts = () => {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // decide what to render
  let content;

  if (isLoading) {
    content = (
      <h1 className="text-center min-h-screen text-2xl text-green-500">
        Loading posts...
      </h1>
    );
  } else if (!isLoading && isError) {
    content = (
      <h1 className="text-center min-h-screen text-2xl text-red-500">
        {error}
      </h1>
    );
  } else if (!isLoading && !isError && posts.length === 0) {
    content = (
      <h1 className="text-center min-h-screen text-2xl text-red-500">
        No Posts Found!
      </h1>
    );
  } else if (!isLoading && !isError && posts.length > 0) {
    content = (
      <ul>
        {posts.map((post, index) => (
          <li key={post.id} className="text-xl mb-6">
            {index + 1}. {post.title}
          </li>
        ))}
      </ul>
    );
  }

  return <div>{content}</div>;
};

export default Posts;

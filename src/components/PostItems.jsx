import {use, Suspense } from "react";

const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json();
}

const PostItems = () => {
    const posts = use(fetchPosts());

  return (
    <div>
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
      
    </div>
  )
}

const Posts = () => {
    return (
      <Suspense fallback="Carregando Posts ...">
        <PostItems />
      </Suspense>
    );
  };
export default Posts;

// min 34

// export default PostItens

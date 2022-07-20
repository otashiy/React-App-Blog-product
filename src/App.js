import { Routes, Route } from "react-router-dom";
import Main from "./screens/main/main";
import NotFound from "./screens/not-found/not-found";
import Login from "./screens/login/login";
import PostsProvider from "./contexts/posts";
import Posts from "./screens/posts/posts";
import Post from "./screens/post/post";



function App() {
  return (
<PostsProvider>
<Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
</PostsProvider>
  );
}

export default App;

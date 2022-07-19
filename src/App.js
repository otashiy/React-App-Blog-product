import { Routes, Route } from "react-router-dom";
import Main from "./screens/main/main";
import NotFound from "./screens/not-found/not-found";
import Login from "./screens/login/login";
import Albums from "./screens/albums/albums"



function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import LoginProvider from "./contexts/login-context";
import Main from "./screens/main/main";
import NotFound from "./screens/not-found/not-found";



function App() {
  return (
  <LoginProvider>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </LoginProvider>
  );
}

export default App;

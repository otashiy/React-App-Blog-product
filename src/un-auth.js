import { Route, Routes } from "react-router-dom";
import Login from "./screens/login/login";
import NotFound from "./screens/not-found/not-found";

const UnauthApp = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default UnauthApp;
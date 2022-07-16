import { createContext, useEffect, useState } from "react";
import UnauthApp from "../un-auth";
import App from "../App";


export const LoginContext = createContext();


const LoginProvider = () => {


const [ token, setToken ] = useState(localStorage.getItem("token"));

useEffect(() => {
    
if (token) {
localStorage.setItem("token", token)
}
}, [token]);

    return (
        <LoginContext.Provider value={{ token, setToken }}>
            {token ? <App /> : <UnauthApp />}
        </LoginContext.Provider>
    );
}

export default LoginProvider;
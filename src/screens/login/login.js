import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../contexts/login-context";
import "./login.scss";

const Login = () => {

const emailRef = useRef();
const passwordRef = useRef();

const [ error, setError ] = useState("");
const [ loading, setLoading ] = useState(false);

const navigate = useNavigate();

const { setToken } = useContext(LoginContext);

const handleFormSubmit = (evt) => {
evt.preventDefault();

const emailValue = emailRef.current.value;
const passwordValue = passwordRef.current.value;

if(emailValue && passwordValue) {
setLoading(true);
fetch("https://reqres.in/api/login", {
method: "POST",
body: JSON.stringify({
    "email": emailValue,
    "password": passwordValue
  }),
  headers: {
    'Content-Type': 'application/json'
  },
})
.then(res => {
if (res.ok) {
return res.json()
}
})
.then(data => {
setToken(data.token);
navigate("/posts");
})
.catch(e => setError(e.message))
.finally(() => setLoading(false))
}
}
    return (
  <>
  <h1 className="login-title">Login</h1>
    <form className="login-form" onSubmit={handleFormSubmit}>
    <input className="login-input" ref={emailRef} placeholder="Login" aria-label="Email" type="email" />
    <input className="login-input" ref={passwordRef} placeholder="Password" aria-label="Password" type="password" />
    <button className="login-btn" disabled={loading} type="submit">Submit</button>
    <strong className="login-error">{error}</strong>
    </form>
  </>
    );
}

export default Login;
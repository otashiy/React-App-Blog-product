import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../contexts/login-context";

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
navigate("/");
})
.catch(e => setError(e.message))
.finally(() => setLoading(false))
}
}

    return (
    <form onSubmit={handleFormSubmit}>
    <input ref={emailRef} aria-label="Email" type="email" />
    <input ref={passwordRef} aria-label="Password" type="password" />
    <button disabled={loading} type="submit">Submit</button>
    <span style={{color: "red"}}>{error}</span>
    </form>
    );
}

export default Login;
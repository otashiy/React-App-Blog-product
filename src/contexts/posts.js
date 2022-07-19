import { createContext, useEffect, useState } from "react";
import { types } from "../consts";
import { getRndInteger } from "../utils";

export const PostsContext = createContext();


const PostsProvider = (props) => {


    const [ posts, setPosts ] = useState();
    const [ loading, setLoading ] = useState(false);
    
    
    useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
    if(res.ok) {
    return res.json();
    }
    })
    .then(data => {
    console.log(data);
    setPosts(data.map(post => {
    return {
    ...post,
    likes: getRndInteger(0, 100),
    date: new Date(`${getRndInteger(2001, 2023)}-${getRndInteger(1, 12)}-${getRndInteger(1, 28)}`).toString(),
    type: types[getRndInteger(0, 2)]
    }
    }))
    })
    .finally(setLoading(false))
    }, []);
    
    if(loading) {
        return <p>Loading...</p>
    }

    return (
    <PostsContext.Provider value={{posts, setPosts}} {...props} />
    );
};

export default PostsProvider;
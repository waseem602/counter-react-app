import React, {useEffect, useState} from 'react';
import axios from 'axios';

export function Reddit()
{
    const [posts, setPosts] = useState([]);
    useEffect(() => {axios.get(`https://www.reddit.com/r/reactjs.json`).then(res => {const newPosts = res.data.data.children.map(obj => obj.data);
        setPosts(newPosts);
            });
    }, []);
    return (
        <div>
            <h1>
                /r/reactjs
            </h1>
            <ol>
                {
                    posts.map(post =>(
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ol>
        </div>
    );
}
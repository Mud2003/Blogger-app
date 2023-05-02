import { useEffect, useState } from 'react';
import Blog from './Blog';
import './blogs.css';
import axios from 'axios';

function Blogs() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        function getBlogs() {
            axios.get("http://localhost:8070/blog/",).then((res) => {
                setBlogs(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getBlogs()
    }, [])

    const blogPostComponent = () => {
        if (blogs.length > 0) {
            return blogs.map((blogs) => {
                return(
                    <Blog
                        title={blogs.title}
                        para={blogs.paragraph}
                        photo={blogs.imgurl}
                    />
                )
            })
        } else {
            return <li>Loading...</li>
        }
    }

    return (
        <div className='bl'>
            {blogPostComponent()}
        </div>
    );
}


export default Blogs;
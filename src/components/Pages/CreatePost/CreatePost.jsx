import './createpost.css';
import {  useState } from 'react';
import axios from "axios";

function CreatePost() {

    const [title, setTitle] = useState("");
    const [imgurl, setImgurl] = useState("");
    const [paragraph, setParagraph] = useState("");


    function handleSubmit(e) {
        e.preventDefault(); // prevent page from refreshing

        const newBlog = {
            title,
            imgurl,
            paragraph
        }

        setTitle('');
        setImgurl('');
        setParagraph('');

        axios.post("http://localhost:8070/blog/add", newBlog).then(()=>{
            alert("Blog Added.....")
        }).catch((err)=>{
            alert(err)
        })
    };
      

    return (
        <div className="form">
            <form onSubmit={handleSubmit} className="formcontent">
                <div className="imgurl">
                    <h3>Image Url:- </h3>
                    <input type="text" name="imageUrl" id='imageUrl' value={imgurl} onChange={(e)=>{
                        setImgurl(e.target.value)
                    }}/>
                </div>
                <div className="title">
                    <h3>Title:- </h3>
                    <input type="text" name="title" id='title' value={title}  onChange={(e)=>{
                        setTitle(e.target.value)
                    }}/>
                </div>
                <div className="para">
                    <h3>Paragraph:- </h3>
                    <textarea name="paragraph" id='paragraph' value={paragraph}  onChange={(e)=>{
                        setParagraph(e.target.value)
                    }}/>
                </div>
                <div className="btn">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePost;
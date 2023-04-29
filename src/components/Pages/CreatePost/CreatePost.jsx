import './createpost.css';
import { useEffect, useState } from 'react';

function CreatePost() {

    const [formData, setFormData] = useState([]);
    
    useEffect(() => {
        console.log(formData);
    },[formData]);


    const handleSubmit = (event) => {
        event.preventDefault(); // prevent page from refreshing
        const { imageUrl, title, paragraph } = event.target.elements; // get form data
        const newFormData  = { imageUrl: imageUrl.value, title: title.value, paragraph: paragraph.value }; // create a new object with form data
    
        setFormData([...formData, newFormData]); // add the new form data to the array
    };
      

    return (
        <div className="form">
            <form onSubmit={handleSubmit} className="formcontent">
                <div className="imgurl">
                    <h3>Image Url:- </h3>
                    <input type="text" name="imageUrl" />
                </div>
                <div className="title">
                    <h3>Title:- </h3>
                    <input type="text" name="title" />
                </div>
                <div className="para">
                    <h3>Paragraph:- </h3>
                    <textarea name="paragraph" />
                </div>
                <div className="btn">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePost;
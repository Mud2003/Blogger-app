import './createpost.css';

function CreatePost() {
    return (
        <div className="form">
            <form onSubmit={''} className="formcontent">
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
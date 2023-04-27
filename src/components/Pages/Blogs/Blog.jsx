import './blog.css';

function Blog(props) {
    return (
        <div className='blog'>
            <img src={props.photo} alt="" />
            <div className="content">
                <h2>{props.title}</h2>
                <p>{props.para}</p>
            </div>
        </div>
    )
}

export default Blog;
import Blog from './Blog';
import './blogs.css';

function Blogs() {

    const blogList = [
        {
            id: 1,
            title: "Accusamus beatae ad facilis cum similique qui sunt.",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sapiente illo quasi, maxime similique, praesentium necessitatibus alias sint, quisquam reiciendis itaque laborum cum repudiandae expedita sed commodi? Laudantium, commodi adipisci!",
            photo: "https://via.placeholder.com/150/92c952"
        },
        {
            id: 2,
            title: "Accusamus beatae ad facilis cum similique qui sunt.",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sapiente illo quasi, maxime similique, praesentium necessitatibus alias sint, quisquam reiciendis itaque laborum cum repudiandae expedita sed commodi? Laudantium, commodi adipisci!",
            photo: "https://via.placeholder.com/150/92c952"
        },
        {
            id: 3,
            title: "Accusamus beatae ad facilis cum similique qui sunt.",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sapiente illo quasi, maxime similique, praesentium necessitatibus alias sint, quisquam reiciendis itaque laborum cum repudiandae expedita sed commodi? Laudantium, commodi adipisci!",
            photo: "https://via.placeholder.com/150/92c952"
        },
        {
            id: 4,
            title: "Accusamus beatae ad facilis cum similique qui sunt.",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sapiente illo quasi, maxime similique, praesentium necessitatibus alias sint, quisquam reiciendis itaque laborum cum repudiandae expedita sed commodi? Laudantium, commodi adipisci!",
            photo: "https://via.placeholder.com/150/92c952"
        },
        {
            id: 5,
            title: "Accusamus beatae ad facilis cum similique qui sunt.",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sapiente illo quasi, maxime similique, praesentium necessitatibus alias sint, quisquam reiciendis itaque laborum cum repudiandae expedita sed commodi? Laudantium, commodi adipisci!",
            photo: "https://via.placeholder.com/150/92c952"
        }
    ]

    const blogPostComponent = () => {
        if (blogList.length > 0) {
            return blogList.map((blogList) => {
                return(
                    <Blog
                        key={blogList.id}
                        title={blogList.title}
                        para={blogList.para}
                        photo={blogList.photo}
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
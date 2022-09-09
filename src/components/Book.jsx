import { Link } from "react-router-dom";
import "./Book.scss";

function Book(props) {
    return (
        <div className='book-main'>
            {
                props.data.map(content => (
                    <div className="book" key={content.title}>
                        <div className="cover-div">
                            <img src={content.pic} className="cover" alt="book cover"></img>
                        </div>
                        <h4 className="title" title={content.title}>{content.title}</h4>
                        <h5 className="author">{content.author}</h5>
                        <h5 className="price">{content.price} TL</h5>
                        <Link className="details" to={`/details/${content.link}`} state={content}>Detay</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Book
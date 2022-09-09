import { useLocation } from "react-router-dom";
import data1 from "../data1.json";
import data2 from "../data2.json";
import './Details.scss'
import { ImCart } from "react-icons/im";
import NotFound from './NotFound';


function Details() {
    const location = useLocation();
    let book = location.pathname.split("/details/")[1];
    const stt = location.state;
    // console.log(stt);
    let data = null;

    for (let i = 0; i < data1.length; i++) {
        if (data1[i].link === book) {
            data = data1[i];
            break;
        }
    }

    if (!data) {
        for (let i = 0; i < data2.length; i++) {
            if (data2[i].link === book) {
                data = data2[i];
                break;
            }
        }
    }

    if (!data) {
        // const loc = useLocation();
        data = stt
    }


    return (
        <div className="all">
            {data !== null ?
                <div className="book-content">
                    <div className="left">
                        <img src={data.pic} className="cover" alt="book cover"></img>
                    </div>
                    <div className="right">
                        <h1 className="title">{data.title}</h1>
                        <h2 className="author">{data.author}</h2>
                        <h3 className="price">{data.price} TL</h3>
                        <p className="desc">{data.description}</p>
                        <div className="button-div">
                            <button className="cart"><ImCart className="icon" />Sepete Ekle</button>
                        </div>
                    </div>
                </div>
                :
                <NotFound />
            }
        </div>

    )
}

export default Details
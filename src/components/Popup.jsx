import './Popup.scss';
import { ImCross, ImFloppyDisk } from "react-icons/im";
import { useState } from 'react';
import { Link } from 'react-router-dom';

let newBook;
function Popup(props) {
    const replaceText = (text) => {
        text = text.replace(/ /g, "-");
        text = text.replace(/ü/g, "u");
        text = text.replace(/ş/g, "s");
        text = text.replace(/ç/g, "c");
        text = text.replace(/ğ/g, "g");
        text = text.replace(/ö/g, "o");
        text = text.replace(/ı/g, "i");
        text = text.toLowerCase();
        return text;
    }

    const [pic, setPic] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const getInfo = () => {
        let link = replaceText(title);
        newBook = {
            pic: pic,
            title: title,
            author: author,
            price: price,
            description: description,
            link: link,
        };

        if (title && author) {
            props.passData(newBook);
            clear();
        }



    }

    const clear = () => {
        setPic("");
        setTitle("");
        setAuthor("");
        setPrice("");
        setDescription("");
    }


    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="content">
                    <div className="button-div">
                        <button className="exit" onClick={() => { props.setTrigger(false); clear() }}><ImCross /></button>
                    </div>
                    <h2>Eklemek istediğiniz kitabın bilgilerini giriniz:</h2>
                    <div className="info">
                        <div className="area">
                            <p className="label">Kitap Adı *</p>
                            <input type="text" className="name-input" id='name-input' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                        </div>
                        <div className="area">
                            <p className="label">Yazar *</p>
                            <input type="text" className="author-input" id='author-input' value={author} onChange={(e) => setAuthor(e.target.value)}></input>
                        </div>
                        <div className="area">
                            <p className="label">Fiyat</p>
                            <input type="label" className="price-input" id='price-input' value={price} onChange={(e) => setPrice(e.target.value)}></input>
                        </div>
                        <div className="area">
                            <p className="label">Fotoğraf Linki</p>
                            <input type="label" className="photo-input" id='photo-input' value={pic} onChange={(e) => setPic(e.target.value)}></input>
                        </div>
                        <div className="area">
                            <p className="label">Açıklama</p>
                            <input type="text" className="description-input" id='photo-input' value={description} onChange={(e) => setDescription(e.target.value)}></input>
                        </div>
                        <p>* Zorunlu alan</p>
                        <div className="add-div">
                            {/* <button className="add" onClick={() => getInfo()}>Kaydet</button> */}
                            {/* <Link onClick={getInfo} to={{ pathname: "/Home", state: newBook }} className="add">
                                <ImFloppyDisk />Kaydet
                            </Link> */}
                            <div className="add-div-inner">
                                <Link onClick={getInfo} to={{ pathname: "/Home", state: newBook }} className="add">
                                    <ImFloppyDisk />Kaydet
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup

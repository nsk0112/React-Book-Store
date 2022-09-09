import data1 from "../data1.json";
import data2 from "../data2.json";
import { ImFolderPlus, ImSearch } from "react-icons/im";
import './Home.scss';
import Book from "./Book";
import Popup from "./Popup";
import { useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import { Puff } from 'react-loader-spinner';


function Home() {
    const [list1, setList1] = useState(data1);
    const [list2, setList2] = useState(data2);
    const [popup, setPopup] = useState(false);
    const [searchBook, setSearchBook] = useState("");
    const [isTextVisible, setIsTextVisible] = useState(false)
    const [filteredArray, setFilteredArray] = useState();
    const [addedBooks, setAddedBooks] = useState([]);
    const [addedBooksVisible, setAddedBooksVisible] = useState(false);
    const [spinner, setSpinner] = useState(false);

    
    useEffect(() => {
        setInterval(() => {
            setIsTextVisible(!isTextVisible)
        }, 1000);
        // console.log(addedBooks);
    }, [isTextVisible])


    const openPopup = (e) => {
        setPopup(true);
    }

    const passData = (data) => {
        // setNewData(data);
        setAddedBooksVisible(true);
        setAddedBooks([...addedBooks, data]);
        setPopup(false);
        // console.log(data);
        setSpinner(true);
        setTimeout(() => {
            setSpinner(false)
        }, 2500);
    }
//yorum
    const search = (event) => {
        let x = event.target.value.toLowerCase();
        // console.log(x);
        setSearchBook(replaceText(x))
        // x = replaceText(x);
        // console.log(x);
        console.log(list1);
        const filteredArray = list1.filter((item) => item.title.toLowerCase().includes(x));
        const filteredArray2 = list2.filter((item) => item.title.toLowerCase().includes(x));
        console.log(filteredArray2);
        console.log(list2);
        // setSearchBook(x);
        // setFilteredArray([...filteredArray, ...filteredArray2]);
        // setFilteredArray([...filteredArray, ...filteredArray2]);
        console.log(filteredArray2);
        let newArray = filteredArray.concat(filteredArray2);
        setFilteredArray(newArray);

        if (addedBooks != []) {
            const filteredArray3 = addedBooks.filter((item) => item.title.toLowerCase().includes(x));
            // setFilteredArray([...filteredArray, ...filteredArray3]);
            newArray = newArray.concat(filteredArray3);
            setFilteredArray(newArray);
        }
    }

    const replaceText = (text) => {
      text = text.replace(/ /g, "-");
      text = text.replace(/ü/g, "u");
      text = text.replace(/ş/g, "s");
      text = text.replace(/ç/g, "c");
      text = text.replace(/ğ/g, "g");
      text = text.replace(/ö/g, "o");
      text = text.replace(/ı/g, "i");
      return text;
    }


    return (
        <div className='home-main'>
            {spinner &&
                <div className="spinner">
                    <Puff
                        type="Puff"
                        color="rgb(146, 243, 165)"
                        height={200}
                        width={200}
                        timeout={1000}
                    />
                    <h2 className="spinner-text">Kitap ekleniyor...</h2>
                </div>
            }
            <div className="topbar">
                <div className="search">
                    <input type="text" className="searchbar" placeholder="Kitap arayın" onChange={search} />
                    <Link to={`/details/${searchBook}`} className="search-button"><ImSearch /></Link>
                </div>
                <button to="/add" onClick={(e) => openPopup(e)} className='add' id='addBook'>Kitap Ekle<ImFolderPlus className='add-icon' /></button>
            </div>

            {searchBook !== "" ?
                <div className="search-div">
                    <h1 className="search-header">Arama</h1>
                    <Book data={filteredArray}></Book>
                </div>

                :

                <div className="content">

                    <div className="book-div">
                        <div className="header-div">
                            <h1 className="book-header">Klasikler</h1>
                        </div>
                        <Book data={list1}></Book>
                    </div>

                    {/* {isTextVisible && <p className="ad">İki kitap alana üçüncü kitap %50 İNDİRİMLİ</p>} */}
                    <p className="ad">Binlerce kitapta kampanyaları kaçırmayın!</p>

                    {/* <div className="book-div">
                        <h1 className="book-header">Popüler</h1>
                        <Book data={list2}></Book>
                    </div> */}

                    <div className="book-div">
                        <div className="header-div">
                            <h1 className="book-header">Popüler</h1>
                        </div>
                        <Book data={list2}></Book>
                    </div>

                    <br />

                    {addedBooksVisible &&
                        // <div className="book-div">
                        //     <h1 className="book-header">Yeni</h1>
                        //     <Book data={addedBooks}></Book>
                        // </div>
                        <div className="book-div">
                            <div className="header-div">
                                <h1 className="book-header">Yeni</h1>
                            </div>
                            <Book data={addedBooks}></Book>
                        </div>
                    }
                </div>
            }
            <Popup trigger={popup} setTrigger={setPopup} passData={passData} className="popup"></Popup>
        </div>
    )
}

export default Home
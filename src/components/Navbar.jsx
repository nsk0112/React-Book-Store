import './Navbar.scss'
import { ImBooks, ImHome, ImUser } from "react-icons/im";
import { Link } from "react-router-dom";
// import Popup from './Popup';
import { useState } from "react";
// import { dataContext } from '../Context';


function Navbar() {
    const [isTextVisible, setIsTextVisible] = useState(true);

    setInterval(() => {
        setIsTextVisible(!isTextVisible);
    }, 1000);


    return (
        <div className='navbar-main'>
            <div className='left'>
                <ImBooks className='website-icon' />
                <h1>Book Store</h1>
            </div>
            <div className="mid">
                <div className="banner1-div">
                    <p className="banner1">Online Kitap Fuarı'na özel binlerce kitapta</p>
                </div>
                {isTextVisible &&
                    <div className="banner2-div">
                        <p className="banner2">%50 İNDİRİM!</p>
                    </div>
                }

            </div>
            <div className='right'>
                <nav >
                    <Link to="/home"><ImHome className='icon' title='Home'/></Link>
                    <Link to="/login" title='Login'><ImUser className='icon' /></Link>
                </nav>
            </div>
            {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup} passData={passData} className="popup"></Popup> */}
        </div>
    )
}

export default Navbar
import './Login.scss';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { ImEyeBlocked, ImEye } from "react-icons/im";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password2, setPassword2] = useState("");
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const navigate = useNavigate();

    const toastNotificationSuccessful = () => {
        toast.success("Giriş Başarılı", {
            theme: "colored"
        });
        setTimeout(() => {
            navigate('/home');
        }, 2000);
    }


    const toastNotificationUnsuccessful = () => {
        toast.error("Kullanıcı adı ya da şifre hatalı", {
            theme: "colored"
        });

    }


    const userLogin = () => {
        // axios.post('https://dev-gis.ankageo.com/rest/v1/auth/login', {username,password}).then((response)=>{
        //     console.log(response);
        // })
        // console.log(userName, password2);
        if (userName, password2) {
            axios.post(`https://dev-gis.ankageo.com/rest/v1/auth/login`, { username: userName, password: password2 })
                .then((response) => {
                    console.log(response);
                    // console.log(response);
                    toastNotificationSuccessful();
                })
                .catch((err) => {
                    toastNotificationUnsuccessful();
                })
        }
    }

    const userNameSet = (event) => {
        let x = event.target.value;
        setUserName(x);
    }

    const passwordSet = (event) => {
        let x = event.target.value;
        setPassword2(x);
    }

    const changeVis = () => {
        setPasswordVisibility(!passwordVisibility);
    }

    const divBorder = () => {

    }

    return (
        <div className='login'>
            <div className="left">
                <div className="left-inner">
                    <h1 className="header">Giriş Yap</h1>
                    <div className="area">
                        <label className='label'>Kullanıcı Adı</label>
                        <input type="text" className="user-name" onChange={userNameSet} />
                    </div>
                    <div className="area">
                        <label className='label'>Şifre</label>
                        <div className="password-div">
                            <input type={passwordVisibility ? "text" : "password"} className="password" onChange={passwordSet} onFocus={divBorder}></input>
                            <button onClick={changeVis}>{passwordVisibility ? <ImEye className='icon' /> : <ImEyeBlocked className='icon' />}</button>
                        </div>
                    </div>
                    <div className="button-div">
                        <button className="login" onClick={userLogin}>Giriş Yap</button>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
        </div>
    )
}

export default Login
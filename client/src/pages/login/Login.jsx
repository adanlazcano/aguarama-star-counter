import { Link } from 'react-router-dom';
import './css/login.css'

// Login Page
const Login = () => {

    const handleLogIn = e =>{
       e.stopPropagation();
      document.querySelector('.loginBx').classList.toggle('active');
    }

    const handleBx = e =>{
       e.stopPropagation();
    }

    return (
        <>
        <div onClick={_=>document.querySelector('.loginBx').classList.remove('active')} className="login">

            <div className="loginLogo">
                <img src="assets/img/logo.png" className="loginLogoImg" title="Aguarama" alt="logo" />
                <button onClick={handleLogIn} className="loginButton" >Iniciar Sesion</button>
            </div>

            <div className="loginBubbles">
                <img src="assets/img/bubble.png" alt="" className="loginImgBubble" />
                <img src="assets/img/bubble.png" alt="" className="loginImgBubble" />
                <img src="assets/img/bubble.png" alt="" className="loginImgBubble" />
                <img src="assets/img/bubble.png" alt="" className="loginImgBubble" />
                <img src="assets/img/bubble.png" alt="" className="loginImgBubble" />
                <img src="assets/img/bubble.png" alt="" className="loginImgBubble" />
                <img src="assets/img/bubble.png" alt="" className="loginImgBubble" />
            </div>
          
        </div>
        <div onClick={handleBx} className="loginBx">
                <input readOnly={true} type="text" defaultValue="demo" className="loginInput" placeholder="Usuario" />
                <input readOnly={true} defaultValue="12345" type="password" className="loginInput" placeholder="Contrase&ntilde;a" />
                <Link to="/dashboard">
                <button className="loginBtn">Entrar</button>
                </Link>
            </div>
        </>
    )
}

export default Login

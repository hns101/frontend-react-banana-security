import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {useNavigate, Link} from 'react-router-dom';
import {AuthContext} from "../contexts/AuthContext";


function NavBar() {
    const navigate = useNavigate();
    const {setIsAuth, isAuth} = useContext(AuthContext);

    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
            </Link>

            <div>
                {isAuth.isAuth && <span>{isAuth.email} </span>}
                {isAuth.isAuth &&
                    <button
                        type="button"
                        onClick={() => {
                            setIsAuth((prevState) => ({
                                ...prevState,  // Keep previous values
                                isAuth: false,  // Update only `isAuth`
                            }));
                            console.log("Gebruiker is uitgelogd!");
                            navigate('/');
                        }}
                    >Log out</button>}
                {!isAuth.isAuth &&
                    <button
                        type="button"
                        onClick={() => navigate('/signin')}
                    >Log in</button>}
                {!isAuth.isAuth &&
                    <button
                        type="button"
                        onClick={() => navigate('/signup')}
                    >Registreren</button>}
            </div>
        </nav>
    );
}

export default NavBar;
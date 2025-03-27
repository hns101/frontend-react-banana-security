import React, {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from "../contexts/AuthContext";

function SignIn() {
    const {setIsAuth ,isAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

        <form>
            <label>
                Gebruikersnaam:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Voer je gebruikersnaam in"
                />
            </label>

            <label>
                Wachtwoord:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Voer je wachtwoord in"
                />
            </label>

            <button type="button" onClick={() => {
                setIsAuth((prevState) => ({
                    ...prevState,  // Keep previous values
                    isAuth: true,  // Update only `isAuth`
                }));
                console.log("Gebruiker is ingelogd!");
                navigate('/profile');
            }}
            >Inloggen
            </button>
        </form>

        <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;
import React, {useContext, useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {AuthContext} from "../contexts/AuthContext";

function SignUp() {
    const {setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
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
                E-mail:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Voer je e-mail in"
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
                    isAuth: true, // Update only `isAuth`
                    user: username, // adding username
                    email: email // adding email
                }));
                console.log("Gebruiker is ingelogd!");
                navigate('/profile');
            }}>Registreren</button>
        </form>
        <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
    );
}

export default SignUp;
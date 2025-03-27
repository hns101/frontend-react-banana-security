import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../contexts/AuthContext";

function SignIn() {

    const {toggleAuth,isAuth} = useContext(AuthContext);

    const logAuth = () => console.log(isAuth);

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form>
        <p>*invoervelden*</p>
        <button type="button" onClick={toggleAuth}>Inloggen</button>
        <button type="button" onClick={logAuth}>log</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;
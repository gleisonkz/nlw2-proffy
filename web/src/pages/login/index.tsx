import React, { useEffect } from 'react';
import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import showPasswordIcon from '../../assets/images/icons/show-password.svg';
import hidePasswordIcon from '../../assets/images/icons/hide-password.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import InputFloat, { ToggleIcon } from '../../components/InputFloat';
import Slogan from '../../components/Slogan';

import './styles.css';

const Login: React.FC = () => {
  const [fadeState, setFadeState] = useState("hidden");

  useEffect(() => {
    setFadeState("visible")
  }, []);

  const toggleIconPassword: ToggleIcon = {
    activeIcon: hidePasswordIcon,
    inactiveIcon: showPasswordIcon
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  function handleLogin(e: FormEvent) {
    history.push("/home")
    e.preventDefault();
  }

  return (
    <section className={`login ${fadeState}`}>
      <Slogan />
      <article className="login-form">
        <form
          onSubmit={handleLogin}
          action=""
        >
          <header>Fazer Login</header>
          <main>
            <InputFloat
              label={"E-mail"}
              name={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputFloat
              label={"Senha"}
              name={"password"}
              toggleIcon={toggleIconPassword}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="help">
              <div className="checkbox-wrapper">
                <input type="checkbox" />
                <span>Lembrar-me</span>
              </div>
              <Link to="/users/lost-password">
                <span>Esqueci minha senha</span>
              </Link>
            </div>
          </main>
          <button
            disabled={!(password && email)}
            type='submit'
          >Entrar
          </button>
          <footer>
            <p>
              Não tem conta?
               <Link to='/users/sign-up'>
                <strong>Cadastre-se</strong>
              </Link>
            </p>
            <p>É de graça
            <img src={purpleHeartIcon} alt="" />
            </p>
          </footer>
        </form>
      </article>
    </section>
  );
}
export default Login;

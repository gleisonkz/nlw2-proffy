import { useState, FormEvent } from 'react';
import React from 'react';

import showPasswordIcon from '../../assets/images/icons/show-password.svg';
import hidePasswordIcon from '../../assets/images/icons/hide-password.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import logoImg from '../../assets/images/logo.svg';
import InputFloat, { ToggleIcon } from '../../components/input-float/input-float';

import './styles.css';

function Login() {

  const toggleIconPassword: ToggleIcon = {
    activeIcon: hidePasswordIcon,
    inactiveIcon: showPasswordIcon
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <section className="login">
      <article className="slogan">
        <div className="containerLogo">
          <img src={logoImg} alt='Proffy' />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
      </article>
      <article className="login-form">
        <form
          onSubmit={handleCreateClass}
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
              <div>
                <span>Esqueci minha senha</span>
              </div>
            </div>
          </main>
          <button
            disabled={!(password && email)}
            type='submit'
          >Entrar
          </button>
          <footer>
            <p>Não tem conta? <strong>Cadastre-se</strong></p>
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

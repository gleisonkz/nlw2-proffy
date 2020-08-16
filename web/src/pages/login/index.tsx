import React from 'react';

import './styles.css';

import showPasswordIcon from '../../assets/images/icons/show-password.svg';

import logoImg from '../../assets/images/logo.svg';
// import backgroundImg from '../../assets/images/success-background.svg';

import Input from '../../components/input/input';


function Login() {

  return (
    <section>

      <article className="slogan">
        <div className="containerLogo">
          <img src={logoImg} alt='Proffy' />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
      </article>
      <article className="login-form">
        <form action="">
          <header>Fazer Login</header>

          <main>
            <div className="input-block">
              <label htmlFor='email'>E-mail</label>
              <input type="text" id="email" />
            </div>
            <div className="input-block">
              <label htmlFor='password'>Senha</label>
              <input type="text" id="password" />
              <button>
                <img src={showPasswordIcon} alt='Aviso Importante' />
              </button>
            </div>
            <div>
              <input type="checkbox" />
              <span>Lembrar-me</span>
            </div>
            <span>Esqueci minha senha</span>
          </main>




          <button type='submit'>Entrar</button>

          <footer>
            <p>Não tem conta? Cadastre-se</p>
            <p>É de graça</p>
          </footer>
        </form>
      </article>
    </section>
  );
}

export default Login;
import React from 'react';

import './styles.css';

import logoImg from '../../assets/images/logo.svg';

import Input from '../../components/input/input';


function Login() {

  return (
    <section>
      <article className='logo-container'>
        <img src={logoImg} alt='Proffy' />
        <h2>Sua plataforma de estudos online.</h2>
      </article>
      <article className="LoginForm">
        <form action="">
          <header>Fazer Login</header>

          <fieldset>
            <legend>Seus dados</legend>
            <Input
              name='email'
              label='E-mail'
            />
            <Input
              name='password'
              label='Senha'
            />
          </fieldset>

          <button type='submit'>Entrar</button>

          <footer>
            <p>Não tem conta? Cadastre-se</p>
            <p>É de graça</p>
            <p></p>
          </footer>
        </form>
      </article>
    </section>
  );
}

export default Login;

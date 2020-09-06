import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import showPasswordIcon from '../../assets/images/icons/show-password.svg';
import hidePasswordIcon from '../../assets/images/icons/hide-password.svg';

import Slogan from '../../components/Slogan';
import InputFloat, { ToggleIcon } from '../../components/InputFloat';
import BackButton from '../../components/BackButton';

import './styles.css';

const SignUp: React.FC = () => {
  const [fadeState, setFadeState] = useState('hidden');

  useEffect(() => {
    setFadeState('visible');
  }, []);

  const toggleIconPassword: ToggleIcon = {
    activeIcon: hidePasswordIcon,
    inactiveIcon: showPasswordIcon,
  };

  const history = useHistory();
  const postSignUp = () => {
    history.push('/users/sign-up-done');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  return (
    <>
      <section className={`sign-up ${fadeState}`}>
        <article className="form">
          <div className="back-button">
            <BackButton routeTo="/users/sign-in" />
          </div>
          <form onSubmit={postSignUp} action="">
            <header>
              <span>Cadastro</span>
              <p>Preencha os dados abaixo para começar</p>
            </header>
            <main>
              <InputFloat
                label={'Nome'}
                name={'nome'}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <InputFloat
                label={'Sobrenome'}
                name={'sobrenome'}
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
              />
              <InputFloat
                label={'E-mail'}
                name={'email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputFloat
                label={'Senha'}
                name={'password'}
                toggleIcon={toggleIconPassword}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </main>
            <button>Concluir Cadastro</button>
          </form>
        </article>
        <Slogan />
      </section>
    </>
  );
};

export default SignUp;

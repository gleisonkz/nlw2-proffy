import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Slogan from '../../components/Slogan';
import InputFloat from '../../components/InputFloat';
import BackButton from '../../components/BackButton';

import './styles.css';

const LostPassword: React.FC = () => {
  const [fadeState, setFadeState] = useState('hidden');
  const [email, setEmail] = useState('');

  const history = useHistory();
  const postNewPassword = () => {
    history.push('/users/lost-password-done');
  };

  useEffect(() => {
    setFadeState('visible');
  }, []);
  return (
    <>
      <section className={`lost-password ${fadeState}`}>
        <article className="main">
          <BackButton routeTo="/users/sign-in" />
          <form onSubmit={postNewPassword}>
            <h1>Eita, esqueceu sua senha?</h1>
            <p>Não esquenta, vamos dar um jeito nisso.</p>
            <InputFloat
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="E-mail"
              name="email"
            />
            <button disabled={!email} type="submit">
              Enviar
            </button>
          </form>
        </article>
        <Slogan />
      </section>
    </>
  );
};
export default LostPassword;

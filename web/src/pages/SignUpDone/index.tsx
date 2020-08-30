import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import doneIcon from "../../assets/images/icons/done.svg"

import './styles.css';

const SignUpDone: React.FC = () => {
  const [fadeState, setFadeState] = useState("hidden");

  useEffect(() => {
    setFadeState("visible")
  }, []);
  return (
    <>
      <section className={`sign-up-done ${fadeState}`}>
        <img src={doneIcon} alt="" />
        <h1>Cadastro concluído</h1>
        <article>
          <p>Agora você faz parte da plataforma da Proffy.</p>
          <p>Tenha uma ótima experiência</p>
        </article>

        <Link to='/home'>
          Fazer Login
        </Link>
      </section>
    </>
  );
};

export default SignUpDone;

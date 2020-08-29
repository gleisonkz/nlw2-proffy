import React, { useState } from "react";

import showPasswordIcon from '../../assets/images/icons/show-password.svg';
import hidePasswordIcon from '../../assets/images/icons/hide-password.svg';

import Slogan from '../../components/Slogan';
import InputFloat, { ToggleIcon } from '../../components/InputFloat';

import './styles.css';

const SignUp: React.FC = () => {

  const toggleIconPassword: ToggleIcon = {
    activeIcon: hidePasswordIcon,
    inactiveIcon: showPasswordIcon
  }
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  return (
    <>
      <section>
        <article className="form">
          <form
            // onSubmit={""}
            action=""
          >
            <header>
              <span>Cadastro</span>
              <p>Preencha os dados abaixo para começar</p>
            </header>
            <main>
              <InputFloat
                label={"Nome"}
                name={"nome"}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <InputFloat
                label={"Sobrenome"}
                name={"sobrenome"}
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
              />
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
            </main>
            <button
              // disabled={!(password && email)}
              type='submit'
            >Concluir Cadastro
        </button>
          </form>
        </article>
        <Slogan />
      </section>
    </>
  );
};

export default SignUp;

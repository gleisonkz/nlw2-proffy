import React from 'react';

import ConfirmationMessage from '../../components/ConfirmationMessage';

const SignUpDone: React.FC = () => {
  return (
    <>
      <ConfirmationMessage
        title={'Cadastro concluído'}
        firstDescription={'Agora você faz parte da plataforma da Proffy.'}
        secondDescription={'Tenha uma ótima experiência'}
        buttonText={'Fazer Login'}
        buttonLink={'/users/sign-in'}
      />
    </>
  );
};
export default SignUpDone;

import React from 'react';

import ConfirmationMessage from '../../components/ConfirmationMessage';

const LostPasswordDone: React.FC = () => {
  return (
    <>
      <ConfirmationMessage
        title={'Redefinição enviada'}
        firstDescription={
          'Boa, agora é só checar o e-mail que foi enviado para você'
        }
        secondDescription={'redefinir sua senha e aproveitar os estudos.'}
        buttonText={'Voltar ao login'}
        buttonLink={'/users/sign-in'}
      />
    </>
  );
};
export default LostPasswordDone;

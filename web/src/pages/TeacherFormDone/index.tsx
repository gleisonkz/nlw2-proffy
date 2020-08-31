import React from 'react';
import ConfirmationMessage from '../../components/ConfirmationMessage';

const TeacherFormDone: React.FC = () => {
  return (
    <>
      <ConfirmationMessage
        title={'Cadastro salvo'}
        firstDescription={
          'Tudo certo, seu cadastro está na nossa lista de professores.'
        }
        secondDescription={'Agora é só ficar de olho no seu WhatsApp.'}
        buttonText={'Acessar lista'}
        buttonLink={'/study'}
      />
    </>
  );
};

export default TeacherFormDone;

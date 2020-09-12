import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import NavBar from '../../components/NavBar';

const Profile: React.FC = () => {
  return (
    <>
      <section className="profile">
        <NavBar pageTitle="Meu Perfil" />
      </section>
    </>
  );
};

export default Profile;

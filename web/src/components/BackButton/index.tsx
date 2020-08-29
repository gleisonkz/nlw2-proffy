import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg'

import './styles.css';

interface BackButtonProps {
  routeTo: string;
}

const BackButton: React.FC<BackButtonProps> = ({routeTo}) => {
  return (
    <>
      <Link to={routeTo}>
        <img className="backButtonImg" src={backIcon} alt="Voltar" />
      </Link>
    </>
  );
};

export default BackButton;

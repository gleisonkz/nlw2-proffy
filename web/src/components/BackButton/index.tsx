import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';

interface BackButtonProps {
  routeTo: string;
}

const BackButton: React.FC<BackButtonProps> = (props: BackButtonProps) => {
  return (
    <>
      <Link to={props.routeTo}>
        <img className="back-button-img" src={backIcon} alt="Voltar" />
      </Link>
    </>
  );
};

export default BackButton;

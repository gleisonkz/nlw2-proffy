import React from 'react';
import { useState, InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  label: string,
  icon?: string
}

const Input: React.FC<InputProps> = ({ label, name, icon, ...rest }) => {

  const [inputValue, setInputValue] = useState('');
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        id={name}
        {...rest} />

      {icon &&
        <button>
          <img src={icon} alt="" />
        </button>
      }
    </div>
  )
};

export default Input;

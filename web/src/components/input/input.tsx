import React, { InputHTMLAttributes } from 'react';
import './input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  label: string,
  icon?: string
}

const Input: React.FC<InputProps> = ({ label, name, icon, ...rest }) => (
  <div className="input-block">
    <label htmlFor={name}>{label}</label>
    <input type="text" id={name} {...rest} />
    {icon &&
      <button>
        <img src={icon} alt="" />
      </button>
    }
  </div>
);

export default Input;

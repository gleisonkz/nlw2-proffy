import React, { InputHTMLAttributes, useState } from 'react';
import './input-float.css';

export interface ToggleIcon {
  activeIcon: string,
  inactiveIcon: string
}
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  label: string,
  icon?: string
  toggleIcon?: ToggleIcon
}



const InputFloat: React.FC<InputProps> = ({ label, name, icon, toggleIcon, ...rest }) => {

  const [inputValue, setInputValue] = useState('');
  const [hiddenPassword, setHiddenPassword] = useState(false);

  return (
    <div className="input-block-float">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type={hiddenPassword ? "password" : "text"}
        id={name}
        {...rest} />
      <label htmlFor={name}>{label}</label>
      {toggleIcon &&
        <button
          onClick={(e) => setHiddenPassword(!hiddenPassword)}
        >
          <img
            src={hiddenPassword ? toggleIcon.activeIcon : toggleIcon.inactiveIcon}
            alt=""
          />
        </button>
      }
    </div>
  )
};

export default InputFloat;

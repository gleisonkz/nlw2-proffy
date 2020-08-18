import React, { InputHTMLAttributes, useState } from 'react';
import './input-float.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  label: string,
  icon?: string
}

const InputFloat: React.FC<InputProps> = ({ label, name, icon, ...rest }) => {

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
      {icon &&
        <button
          onClick={(e) => setHiddenPassword(!hiddenPassword)}
        >
          <img src={icon} alt="" />
        </button>
      }
    </div>
  )
};

export default InputFloat;

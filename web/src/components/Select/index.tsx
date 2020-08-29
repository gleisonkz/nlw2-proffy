import React from 'react';
import { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{ value: string; label: string }>;
}
const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => (
  <div className='select-block'>
    <label htmlFor={name}>{label}</label>
    <select value="" id={name} {...rest} >
      <option value="" disabled hidden>Selecione uma opção</option>
      {
        options.map(element => {
          return <option key={element.value} value={element.value}>{element.label}</option>
        })
      }
    </select>
  </div>
);

export default Select;

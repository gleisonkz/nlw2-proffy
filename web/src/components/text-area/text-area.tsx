import React, { TextareaHTMLAttributes } from 'react';
import './text-area.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string,
  label: string,
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => (
  <div className="text-area-block">
    <label htmlFor={name}>{label}</label>
    <textarea id={name} {...rest} />
  </div>
);

export default Textarea;
